const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      codeCoverage: {
        url: 'http://localhost:3000/__coverage__',
      },
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)

      return config
    },
  },
});
