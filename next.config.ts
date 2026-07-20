import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// Allows pointing the build dir elsewhere (e.g. sandboxed/CI environments
	// where the default .next directory is not writable). Defaults to .next.
	distDir: process.env.NEXT_DIST_DIR || '.next'
};

export default nextConfig;
