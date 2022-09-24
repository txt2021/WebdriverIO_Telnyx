const { BASE_URL } = require('../env/env')
exports.config = {    
    specs: [
        './test/specs/**/*.js'
    ],
  
    maxInstances: 10,
    services: [['selenium-standalone', { chrome: 'latest' }]], 
    
    capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--window-size=1500,1000']},
    }],
   
    logLevel: 'info',
   
    bail: 0,
    baseUrl: BASE_URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    framework: 'mocha',
   
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
