exports.config = {
    useAllAngular2AppRoots: true,
    specs: [
        'test/e2e/authentication/speakerregistration/**/*.spec.ts'
    ],
    // allScriptsTimeout: 110000,
    /*jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },*/
    baseUrl: 'http://localhost:3000/',
    directConnect: true,

    capabilities: {
        browserName: 'chrome'
    }

};


exports.otherConfig = {
    useAllAngular2AppRoots: true,
    exclude: [],
    allScriptsTimeout: 110000,
    onPrepare: [Function],
    specs: ['test/e2e/**/*.spec.ts'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: [Function]
    },
    baseUrl: 'http://localhost:3000/',
    directConnect: true,
    capabilities: {browserName: 'chrome', chromeOptions: {args: [Object]}}
};
