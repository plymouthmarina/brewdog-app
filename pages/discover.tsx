import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Beer } from "@/types/Beer";
import Accordion from "@/components/Accordion";
import { useState } from "react";
import Head from "next/head";

const Discover: NextPage<{ beers: Beer[] }> = ({ beers }) => {
    const [beersData, setBeersData] = useState(beers);

    return (
        <>
            <Head>
                <title>BrewDog app | Discover</title>
                <meta
                    name="description"
                    content="Discover page meta description"
                />
            </Head>
            <section className="flex w-full justify-center py-10">
                <Accordion beers={beersData} />
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

export default Discover;
