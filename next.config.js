/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   unoptimized: true,
  // },
  output: "standalone",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
