
import { create } from "zustand";
import apiClient from "@/lib/apiClient";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

interface Product {
    id: number;
    name: string;
    price: string;
    image?: string;
    category?: { id: number; name: string };
}

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    fetchProductById: (id: string) => Promise<Product | null>;
    searchProducts: (query: string) => Promise<void>;
    filterByCategory: (categoryId: number) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    loading: false,
    error: null,

    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const res = await apiClient.get(API_ENDPOINTS.PRODUCTS);
            set({ products: res.data.results || res.data });
        } catch (err: any) {
            set({ error: "Failed to fetch products" });
        } finally {
            set({ loading: false });
        }
    },

    fetchProductById: async (id) => {
        try {
            const res = await apiClient.get(API_ENDPOINTS.PRODUCT_DETAIL(id));
            return res.data;
        } catch {
            return null;
        }
    },

    searchProducts: async (query) => {
        if (!query.trim()) return;
        set({ loading: true, error: null });
        try {
            const res = await apiClient.get(API_ENDPOINTS.SEARCH_PRODUCTS(query));
            set({ products: res.data.results || res.data });
        } catch {
            set({ error: "Search failed" });
        } finally {
            set({ loading: false });
        }
    },

    filterByCategory: async (categoryId) => {
        set({ loading: true, error: null });
        try {
            const res = await apiClient.get(API_ENDPOINTS.CATEGORY_PRODUCTS(categoryId));
            set({ products: res.data.results || res.data });
        } catch {
            set({ error: "Failed to fetch category products" });
        } finally {
            set({ loading: false });
        }
    },
}));
