"use client";
import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import CategoryList from "@/components/ui/CategoryList";
import ProductCard from "@/components/ui/ProductCard";


const Products = () => {

    const {products, fetchProducts, loading, error } = useProductStore();
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="w-[80%] mx-auto">
            <CategoryList />

            {
                loading && 
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p>Loading...</p>
                    </div>
            }
            
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 shadow-xs mt-6">
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default Products;