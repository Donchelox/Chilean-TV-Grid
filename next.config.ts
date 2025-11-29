import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ⚠️ Ojo: esto deja compilar aunque haya errores de TypeScript.
  typescript: {
    ignoreBuildErrors: true,
  },

  // ⚠️ Y esto permite que el build pase aunque haya errores de ESLint.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Configuración de imágenes remotas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // experimental: {} // Si no usas nada experimental, mejor dejarlo fuera.
};

export default nextConfig;
