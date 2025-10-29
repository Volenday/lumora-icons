import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => {
  // Dev mode: serve the demo app
  if (command === "serve") {
    return {
      plugins: [
        react({ jsxRuntime: "automatic", jsxImportSource: "react" }),
        tsconfigPaths(),
      ],
      build: {
        outDir: "dist-demo",
      },
    };
  }

  // Build mode: build the component library
  return {
    plugins: [
      react({ jsxRuntime: "automatic", jsxImportSource: "react" }),
      tsconfigPaths(),
      dts({ insertTypesEntry: true }),
    ],
    build: {
      lib: {
        entry: "src/index.ts",
        name: "LumoraIcons",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            "react/jsx-dev-runtime": "jsxRuntime",
          },
        },
      },
    },
  };
});
