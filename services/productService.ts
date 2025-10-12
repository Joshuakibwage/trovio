import { ENDPOINTS } from "@/utils/endpoints";

export const getProducts = async () => {
  try {
    const res = await fetch(ENDPOINTS.PRODUCTS, { cache: "no-store" });
    console.log("Status:", res.status);

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    console.log("Products:", data);

    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};
