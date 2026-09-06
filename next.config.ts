import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite cargar imágenes de cualquier dominio
      },
    ],
  },
};

export default nextConfig;