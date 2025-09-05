import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    },
    define: {
        'import.meta.env.VITE_KEYCLOAK_URL': JSON.stringify(process.env.services__keycloak__http__0)
    }
})
