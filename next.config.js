/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        additionalData: `@import "styles/settings.scss";`,
    },
    images: {
        domains: ["api.punkapi.com", "images.punkapi.com"],
        loader: "custom",
        path: "/",
    },
};

module.exports = nextConfig;
