import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hamdars-code-challenge",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
