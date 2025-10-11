"use client";
import { useState } from "react";
import { useProductStore } from "@/store/productStore";


const SearchBar = () => {

    const [query, setQuery] = useState("");
    const { searchProducts } = useProductStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        searchProducts(query);
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <input
                type="text" 
                placeholder="Search products ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-l-md focus:outline-none"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
            >
                Search
            </button>
        </form>
    )
}


export default SearchBar;