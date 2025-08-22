/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://i.scdn.co/image/**')],
        domains: ['mosaic.scdn.co',
            'i.scdn.co',
            'image-cdn-ak.spotifycdn.com',],
    }
};

export default nextConfig;
