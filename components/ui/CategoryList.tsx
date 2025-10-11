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
    console.log(categories)

    useEffect(() => {
        (async () => {
            const res = await apiClient.get(API_ENDPOINTS.CATEGORIES);
            setCategories(res.data.results || res.data);
        })();
    }, []);

    return (
        <div className="flex overflow-x-scroll gap-4 whitespace-nowrap no-scrollbar py-4">
            {
                categories.map((category) => (
                    <button 
                        key={category.id}
                        onClick={() => filterByCategory(category.id)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-blue-600 hover:text-white cursor-pointer"
                    >
                        {category.name}
                    </button>
                ))
            }
        </div>
    )
}


export default CategoryList;