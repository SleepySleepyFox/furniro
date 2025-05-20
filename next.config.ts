import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.ikea.com',
                port: '',

                search: '',
            },
        ],
    },
};

// "https://www.ikea.com/us/en/images/products/nysjoen-high-cabinet-white__0971572_pe811380_s5.jpg"
export default nextConfig;
