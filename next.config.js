const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/v1/image/**",
      },
    ],
  },
});

module.exports = nextConfig;
