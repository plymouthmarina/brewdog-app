import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

function Layout({children} : {children : React.ReactNode}) {
    return (
        <>
            <Navbar />
            <main className='container mx-auto px-4 font-sans'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
