"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";
import { API_ENDPOINTS } from "@/lib/endpoints";

interface ProductImageProps {
    productId: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

interface ProductImageData {
    id: string;
    image: string;
    is_primary: boolean;
}

export default function ProductImage({
    productId,
    alt = "Product image",
    width = 220,
    height = 300,
    className = "",
}: ProductImageProps) {
    
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {

        if (!productId) return;

        const fetchImage = async () => {
        try {

            const res = await axiosClient.get(API_ENDPOINTS.PRODUCT_IMAGES_BY_ID(productId));

            let images: ProductImageData[] = [];

            if (Array.isArray(res.data)) {
                images = res.data;
            } else if (Array.isArray(res.data.results)) {
                images = res.data.results;
            } else if (res.data.image) {
                images = [res.data];
            } else {
                console.warn("Unexpected image data structure:", res.data);
            }

            if (images.length === 0) {
                console.warn("No images found for product:", productId);
                setImageUrl(null);
                return;
            }

            const primary = images.find((img) => img.is_primary);
            const url = primary?.image || images[0]?.image || null;


            setImageUrl(typeof url === "string" && url.trim() !== "" ? url : null);
        } catch (err) {
                    console.error("Failed to fetch product images:", err);
                    setImageUrl(null);
                }
            };

            fetchImage();
        }, [productId]);

        if (!imageUrl) {
            return (
            <div
                className={`bg-gray-100 flex items-center justify-center ${className}`}
                style={{ width, height }}
            >
                <span className="text-gray-400 text-sm">No image</span>
            </div>
            );
        }

  return (
    <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover rounded-xl ${className}`}
    />
  );
}
