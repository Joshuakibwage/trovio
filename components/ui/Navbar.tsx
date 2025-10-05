import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="shadow-2xs w-full h-12">
      <div className="container mx-auto flex justify-between items-center p-4">

        <Link href="/">Trovio</Link>
        
        <div className="flex gap-4">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>

        <div>
          <Link href="auth/Login">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;