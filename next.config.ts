import type { NextConfig } from "next";

// Definir variables de entorno
const WORDPRESS_HOSTNAME = process.env.WORDPRESS_HOSTNAME || "";
const WORDPRESS_URL = process.env.WORDPRESS_URL || "";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: WORDPRESS_HOSTNAME, // Usar la variable definida
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${WORDPRESS_URL}/wp-admin`, // Usar la variable definida
        permanent: true,
      },
    ];
  },
};

export default nextConfig;