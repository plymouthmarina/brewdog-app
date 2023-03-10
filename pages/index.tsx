import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>BrewDog app | Home</title>
                <meta name="description" content="Home page meta description" />
            </Head>
            <section className="py-10">
                <h1 className="mb-2 text-2xl font-semibold text-secondary md:mb-5 md:text-5xl">
                    BrewDog
                </h1>
                <p className="max-w-4xl text-base text-tertiary-dark md:text-lg">
                    BrewDog is a brewery, bar chain, and brand with a capital B.
                    It launched in Aberdeenshire, Scotland in 2007, and was
                    founded by friends James Watt and Martin Dickie. Since then,
                    BrewDog has expanded into a multinational company with
                    nearly 100 locations, and more than 1,000 employees around
                    the world.
                </p>
            </section>
        </>
    );
};

export default Home;
