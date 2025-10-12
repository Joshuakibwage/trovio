import ProductImage from "@/components/ui/ProductImage";


const ProductCard = ({product}: {product: any}) => {
    return (
        <div className="p-4 border border-neutral-100 rounded-lg shadow-sm hover:shadow-md transition">
            <ProductImage
                productId={product.id}
                alt={product.name}
                className="w-full h-64"
            />
            <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price_with_currency}</p>
        </div>
    )
}


export default ProductCard;