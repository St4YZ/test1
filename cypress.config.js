const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    defaultCommandTimeout: 8000,
    viewportWidth: 1360,
    viewportHeight: 768,
    baseUrl: 'https://rozetka.com.ua/ua/',
    env: {},
    projectId: "wj3pn6",
    specPattern: ["cypress/integration/examples/*.js"],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // "cypress/integration/**/*.cy.{js,jsx,ts,tsx}"
  },
});
