import React from "react";
import Navbar from "@/components/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 font-sans">{children}</main>
        </>
    );
}

export default Layout;
