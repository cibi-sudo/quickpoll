import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environment: "node", // Server Actions run on the server
        include: ["tests/**/*.test.ts"], // your test folder
    },
});
