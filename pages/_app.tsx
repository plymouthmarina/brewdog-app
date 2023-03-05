import "@/styles/globals.scss";
import "@/styles/components.scss";

import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>BrewDog app</title>
                <meta
                    name="description"
                    content="BrewDog app generic meta description"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
