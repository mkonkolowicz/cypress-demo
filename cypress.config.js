const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:'techbash-demo',
  e2e: {
    supportFile:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
