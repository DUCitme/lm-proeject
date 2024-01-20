import react from '@vitejs/plugin-react';

import { resolve } from 'path';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';
import { RouteObject } from 'react-router';

const fs = require('fs');

const pathResolver = (path: string) => resolve(__dirname, path);
const dev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
    envDir: './env',
    plugins: [
        react(),
        WindiCSS(),
        Pages({
            exclude: ['**/components/*.**'],
            onRoutesGenerated: (routes: RouteObject[]) => {
                // console.log('routes', routes);
                if (dev) {
                    fs.writeFileSync(pathResolver('./routes.json'), JSON.stringify(routes));
                }
            },
            importMode: (filePath: string, ...data) => 'sync',
            extendRoute(route, parent) {
                if (route.path === 'login') return route;

                return {
                    ...route,
                    meta: { auth: true },
                };
            },
        }),
        tsconfigPaths(),
        Inspect(),
    ],
    css: {
        preprocessorOptions: {
            scss: { additionalData: `@import "./src/core/scss/_variable.scss";\n` },
        },
    },
    build: {
        cssCodeSplit: false,
    },
});
