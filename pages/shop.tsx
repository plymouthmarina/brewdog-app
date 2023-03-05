import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Beer } from "@/types/Beer";
import GalleryItem from "@/components/GalleryItem";
import { useState } from "react";
import Head from "next/head";

const Shop: NextPage<{ beers: Beer[] }> = ({ beers }) => {
    const [sortedBeers, setSortedBeers] = useState<Beer[]>(beers);

    const sortItemsAsc = () => {
        const updated = [...sortedBeers].sort((a, b) => {
            return a.abv - b.abv;
        });
        setSortedBeers(updated);
    };

    const sortItemsDsc = () => {
        const updated = [...sortedBeers].sort((a, b) => {
            return b.abv - a.abv;
        });
        setSortedBeers(updated);
    };

    return (
        <>
            <Head>
                <title>BrewDog app | Shop</title>
                <meta name="description" content="Shop page meta description" />
            </Head>
            <section className="py-10">
                <button
                    className="mb-8 mr-4 h-12 w-48 border-2 border-secondary bg-transparent font-bold text-secondary transition duration-500 hover:bg-secondary hover:text-white"
                    onClick={sortItemsAsc}
                >
                    ABV Ascending
                </button>
                <button
                    className="mb-8 mr-4 h-12 w-48 border-2 border-secondary bg-transparent font-bold text-secondary transition duration-500 hover:bg-secondary hover:text-white"
                    onClick={sortItemsDsc}
                >
                    ABV Descending
                </button>
                <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {sortedBeers.map((beer, index) => {
                        return <GalleryItem key={index} beer={beer} />;
                    })}
                </div>
            </section>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const results: Beer[] = await response.json();

    return {
        props: {
            beers: results,
        },
    };
};

export default Shop;
