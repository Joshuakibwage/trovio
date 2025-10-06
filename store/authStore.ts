
import { create } from "zustand";
import axiosClient from "@/lib/axiosClient";


interface User {
    id?: number;
    email: string;
    username?: string;
    is_admin?: boolean;
    }

// auth store state
interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;

    // Actions
    register: (email: string, username: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshAccessToken: () => Promise<void>;
}

//Zustand store
export const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,

  //Register new user
    register: async (email, username, password) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosClient.post("/accounts/register/", {
                email,
                username,
                password,
            });

            
            const { access, refresh, user } = response.data;

            set({
                user,
                accessToken: access || null,
                refreshToken: refresh || null,
                isAuthenticated: true,
            });

            // Save tokens in localStorage
            if (access) localStorage.setItem("accessToken", access);
            if (refresh) localStorage.setItem("refreshToken", refresh);
            if (user) localStorage.setItem("user", JSON.stringify(user));
        } catch (error: any) {
            console.error("Registration failed:", error.response?.data || error.message);
            set({ error: error.response?.data?.message || "Registration failed" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },

    // Login user
    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosClient.post("/accounts/login/", {
                email,
                password,
            });

            const { access, refresh, user } = response.data;

            set({
                user,
                accessToken: access,
                refreshToken: refresh,
                isAuthenticated: true,
            });

            // Save to localStorage
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error: any) {
            console.error("Login failed:", error.response?.data || error.message);
            set({ error: error.response?.data?.detail || "Invalid credentials" });
            throw error;
        } finally {
            set({ loading: false });
        }
    },

    // Logout user
    logout: () => {
        // Clear from state + localStorage
        set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
        });

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
    },

    // Refresh token
    refreshAccessToken: async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) return;

            const response = await axiosClient.post("/accounts/token/refresh/", {
                refresh: refreshToken,
            });

            const newAccess = response.data.access;
            set({ accessToken: newAccess });
                localStorage.setItem("accessToken", newAccess);
        } catch (error: any) {
            console.error("Token refresh failed:", error.response?.data || error.message);
            set({ isAuthenticated: false });
        }
    },
}));
