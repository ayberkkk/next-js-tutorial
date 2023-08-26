/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/1000366/pexels-photo-1000366.jpeg",
      },
    ],
  },
};

module.exports = nextConfig;
