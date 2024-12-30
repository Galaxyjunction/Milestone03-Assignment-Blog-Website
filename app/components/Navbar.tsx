"use client" 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Use usePathname to get the current path

  return (
    <nav className="w-full h-16 relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold top-0 z-50 shadow-lg">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
      <div className="container mx-auto px-6 flex items-center justify-between h-full relative z-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-400 transition">
            MyBlog<span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative ${
                pathname === link.href ? "text-blue-400" : ""
              } group transition`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full ${
                  pathname === link.href ? "w-full" : ""
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Responsive Menu Placeholder */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none hover:text-blue-400 transition"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

