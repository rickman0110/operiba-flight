import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default (mode: any) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@assets", replacement: "/src/assets" },
        { find: "@components", replacement: "/src/components" },
        { find: "@pages", replacement: "/src/pages" },
      ],
    },
  });
};
