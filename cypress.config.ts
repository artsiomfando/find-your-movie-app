// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

const webpackDevConfig = require('./webpack.dev');

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: 'http://localhost:5000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // eslint-disable-next-line import/no-extraneous-dependencies, global-require
      require('@cypress/code-coverage/task')(on, config);
      return config;
    }
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
        ...webpackDevConfig
      }
    }
  }
});
