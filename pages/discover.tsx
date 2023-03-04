import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Beer } from "@/types/Beer";

const Discover: NextPage<{ beers: Beer[] }> = ({ beers }) => {
    return (
        <>
            <h1>Discover</h1>
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

export default Discover;
