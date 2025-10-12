"use client";
import ProductImage from "@/components/ui/ProductImage";
import { useCartStore } from "@/store/cartStore";


const ProductCard = ({product}: {product: any}) => {

    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {

        addToCart({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price_with_currency.replace(/[^\d.]/g, "")), 
            image: product.image || null,
            quantity: 1,
        });
    }
    return (
        <div className="p-4 border border-neutral-100 rounded-lg shadow-sm hover:shadow-md transition">
            <ProductImage
                productId={product.id}
                alt={product.name}
                className="w-full h-64"
            />
            <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
            <div className="flex items-center justify-between my-4">
                <p className="text-gray-600">{product.price_with_currency}</p>

                <button
                    onClick={handleAddToCart}
                    className="bg-blue-600 text-white py-1 px-3 text-sm rounded hover:bg-blue-700 transition mt-auto cursor-pointer"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}


export default ProductCard;