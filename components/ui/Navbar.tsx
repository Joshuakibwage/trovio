"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {


  const pathname = usePathname();

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

        <div className="flex gap-4">
          <Link href="/login" className="border-1 px-4 py-1 rounded-md ">
            Login
          </Link>

          <Link 
            href="/register" 
            className="bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-500 transition delay-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;