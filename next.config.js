/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@import "styles/settings.scss";`
    }
}

module.exports = nextConfig
