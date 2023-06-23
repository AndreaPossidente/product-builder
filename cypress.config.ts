import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
  },
  component: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
