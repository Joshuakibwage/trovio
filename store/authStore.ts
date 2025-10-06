import { create } from "zustand";
import axiosClient from "@/lib/axiosClient";


interface User {
    id: number;
    email: string;
    is_admin: boolean;
}


interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    isAuthenticated: false,

    login: async (email, password) => {
        const res = await axiosClient.post("/accounts/login/", { email, password });
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        set({ user: res.data.user, accessToken: res.data.access, isAuthenticated: true });
    },

    logout: () => {
        localStorage.clear();
        set({ user: null, accessToken: null, isAuthenticated: false });
    },
}));
