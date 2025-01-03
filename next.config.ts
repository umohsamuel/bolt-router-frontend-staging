import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // serverExternalPackages: ['pino-pretty', 'lokijs', 'encoding']
  experimental: {
    turbo: {
      resolveAlias: {
        'pino-pretty': 'pino-pretty/noop',
        'process': 'process/browser'
      }
    }
  }
};

export default nextConfig;
