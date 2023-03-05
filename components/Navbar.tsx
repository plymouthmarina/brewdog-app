import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-primary-dark font-sans text-white">
            <div className="container mx-auto flex h-full items-center justify-end px-4">
                <Link
                    href="/"
                    className="px-5 py-6 transition duration-500 hover:opacity-60"
                >
                    Home
                </Link>
                <Link
                    href="/discover"
                    className="px-5 py-6 transition duration-500 hover:opacity-60"
                >
                    Discover
                </Link>
                <Link
                    href="/shop"
                    className="px-5 py-6 transition duration-500 hover:opacity-60"
                >
                    Shop
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
