import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: false,
    json: true,
  },
  defaultCommandTimeout:20000,
  e2e: {
    baseUrl:"https://petstore.swagger.io/v2",
  },
});
