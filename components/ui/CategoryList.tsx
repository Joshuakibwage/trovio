"use client";
import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "@/lib/endpoints";
import { useProductStore } from "@/store/productStore";
import apiClient from "@/lib/axiosClient";

interface Category {
    id: number;
    name: string;
}

const CategoryList = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const { filterByCategory } = useProductStore();
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await apiClient.get(API_ENDPOINTS.CATEGORIES);
                setCategories(res.data.results || res.data);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            }
        })();
    }, []);

    return (
        <div className="flex overflow-x-scroll gap-4 whitespace-nowrap no-scrollbar py-4 mt-6">
            {categories.map((category) => (
                <button 
                    key={category.id}
                    onClick={() => {
                        setActiveCategory(category.id);
                        filterByCategory(category.id);
                    }}
                    className={`${
                        category.id === activeCategory 
                            ? "bg-blue-600 text-white px-3 py-1 rounded cursor-pointer" 
                            : "bg-gray-200 px-3 py-1 rounded"
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    )
}

export default CategoryList;
