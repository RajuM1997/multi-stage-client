import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"], // Adjust path relative to the root
    files: "**/*.test.{jsx,tsx}", // Adjust file pattern as needed
    transform: {
      "^.+\\.jsx?$": [
        "@vitest/transform-react",
        {
          babel: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
      "^.+\\.tsx?$": [
        "@vitest/transform-typescript",
        {
          tsconfig: "./tsconfig.json",
        },
      ],
    },
  },
});
