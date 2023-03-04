import Link from "next/link"

function Navbar() {
    return (
        <nav className="bg-primary-dark text-white font-sans">
            <div className="container h-full mx-auto px-4 flex items-center justify-end">
                <Link href="/" className="px-5 py-6">Home</Link>
                <Link href="/discover" className="px-5 py-6">Discover</Link>
                <Link href="/shop" className="px-5 py-6">Shop</Link>
            </div>
        </nav>
    )
}

export default Navbar
