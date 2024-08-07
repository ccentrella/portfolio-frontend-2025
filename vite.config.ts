import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    cacheDir: '.cache',
    server: {
        port: 3000,
    },
    plugins: [
        remix({
            buildDirectory: '.build',
            ignoredRouteFiles: ['**/.*'],
            ssr: false,
        }),
        tsconfigPaths(),
    ],
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
});
