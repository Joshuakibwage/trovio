"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/ui/SearchBar";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  const totalItems = useCartStore((state) => state.totalItems);

  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="shadow-2xs w-full ">
      <div className="container mx-auto flex justify-between items-center py-4">

        <Link href="/">Trovio</Link>
        
        <div className="flex gap-4">
          <Link href="/" className={`${
              pathname === "/" ? "text-blue-600 border-b-2" : "text-gray-600"
            } hover:text-blue-500`}
          >
            Home
          </Link>

          <Link href="/products" className={`${
              pathname === "/products" ? "text-blue-600 border-b-2" : "text-gray-600"
            } hover:text-blue-500`}
          >
            Products
          </Link>

          <Link href="/about" className={`${
              pathname === "/about" ? "text-blue-600 border-b-2" : "text-gray-600"
            } hover:text-blue-500`}
          >
            About
          </Link>
        </div>

        <SearchBar />

        <div className="flex items-center gap-4">
          <div>
            <Link href="/cart" className="relative w-6 h-6">
              <ShoppingCart className="text-gray-800 w-6 h-6" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-9 -right-6 flex items-center justify-center w-4 h-4 bg-blue-500 text-white text-[10px] font-semibold rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

          </div>
          <div className="flex gap-2">
            <Link href="/login" className="border border-gray-300 px-4 py-1 rounded-md ">
              Login
            </Link>

            <Link 
                href="/register" 
                className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-500 transition delay-200"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;