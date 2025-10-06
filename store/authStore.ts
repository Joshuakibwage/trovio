import { create } from "zustand";
import axiosClient from "@/lib/axiosClient";

interface User {
    id: number;
    email: string;
    username?: string;
    is_admin?: boolean;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    register: (email: string, username: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshTokenFunc: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,

    register: async (email, username, password) => {
        await axiosClient.post("/accounts/register/", { email, username, password });
    },

    login: async (email, password) => {
        const { data } = await axiosClient.post("/accounts/login/", { email, password });
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        set({
        user: data.user,
        accessToken: data.access,
        refreshToken: data.refresh,
        isAuthenticated: true,
        });
    },

    refreshTokenFunc: async () => {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) return;
        const { data } = await axiosClient.post("/accounts/token/refresh/", { refresh });
        localStorage.setItem("accessToken", data.access);
        set({ accessToken: data.access });
    },

    logout: async () => {
        try {
        await axiosClient.post("/accounts/logout/");
        } catch {
        console.warn("Logout failed — clearing tokens anyway.");
        }
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false });
    },
}));
