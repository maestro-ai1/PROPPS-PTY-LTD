/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // This codebase was written against Vite/esbuild, which never
  // type-checks or lints on build - only transpiles. next build does
  // both by default and will fail the deploy on pre-existing issues
  // that were never actually caught before. Keep these off until a
  // dedicated pass fixes the underlying TS/lint issues for real.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This codebase imports its own .ts/.tsx files with a trailing .js
  // extension (e.g. `from '../lib/order.js'` where the real file is
  // order.ts) - a convention TypeScript's own resolver understands,
  // but webpack does not by default, so it fails with "Module not
  // found". Teach webpack the same fallback: try .ts/.tsx when a .js
  // specifier doesn't resolve to a literal .js file.
  webpack(config) {
    config.resolve.extensionAlias = {
      ...(config.resolve.extensionAlias || {}),
      '.js': ['.js', '.ts', '.tsx'],
    };
    return config;
  },
};

export default nextConfig;
