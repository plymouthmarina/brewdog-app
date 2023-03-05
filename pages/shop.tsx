import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Beer } from "@/types/Beer";
import GalleryItem from "@/components/GalleryItem";

const Shop: NextPage<{ beers: Beer[] }> = ({ beers }) => {
    return (
        <section className="grid grid-cols-1 gap-x-4 gap-y-12 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {beers.map((beer, index) => {
                return <GalleryItem key={index} beer={beer} />;
            })}
        </section>
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
