exports.config = {

  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',
  allScriptsTimeout: 11000,

  specs: [
      './scenerios/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
