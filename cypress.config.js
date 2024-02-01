const fs = require("fs-extra");
const path = require("path");
const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

const defaultConfiguration = require("./cypress/configFiles/defaultConfig");

const getConfigurationByFile = async (config) => {
  const file = config.env.fileConfig || "demo";
  const configurationByFile = await fs.readJson(
    path.resolve("cypress/configFiles", `${file}.json`)
  );
  return { ...defaultConfiguration, ...configurationByFile };
};

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  e2e: {
    env: {
      allureResults: "allure-results", // for test results to write
      allureAddVideoOnPass: true,
      allureSkipAutomaticScreenshots: true,
      allureOmitPreviousAttemptScreenshots: true,
      allureLogCypress: true,
    },
    async setupNodeEvents(on, config) {
      const configFromFile = await getConfigurationByFile(config);
      allureWriter(on, config);
      return { ...config, ...configFromFile };
    },
  },
});
