module.exports = function(config) {
  var dependencies = require('./package.json').dependencies;
  var devDependencies = require('./package.json').devDependencies;
  var excludedDependencies = ['systemjs', 'zone.js', 'karma-phantomjs-launcher'];
  var configuration = {
    basePath: '',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    preprocessors: {
      'test/**/!(*.spec)+(.js)': ['coverage'],
      'app/**/*.js': ['sourcemap']
    },

    // Generate json used for remap-istanbul
    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ]
    },

    files: [
      'node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',

      'systemjs.conf.js',
      'karma-test-shim.js',

      { pattern: 'app/**/*.js', included: false },
      { pattern: 'test/**/*.js', included: false },

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: 'app/**/*.html', included: false },
      { pattern: 'app/**/*.css', included: false },

      // paths to support debugging with source maps in dev tools
      { pattern: 'app/**/*.ts', included: false, watched: false },
      { pattern: 'app/**/*.js.map', included: false, watched: false },
      { pattern: 'test/**/*.ts', included: false, watched: false },
      { pattern: 'test/**/*.js.map', included: false, watched: false }
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/app/",
      "/test/": "/base/test/",
      "/node_modules/": "/base/node_modules/",
      "/base/node_modules/util/support/isBuffer" : "/base/node_modules/util/support/isBuffer.js"
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
  };

  Object.keys(dependencies).forEach(function(key) {
    if(excludedDependencies.indexOf(key) >= 0) { return; }

    configuration.files.push({
        pattern: 'node_modules/' + key + '/**/*.js',
        included: false,
        watched: false
    });
  });

  Object.keys(devDependencies).forEach(function(key) {
    if(excludedDependencies.indexOf(key) >= 0) { return; }

    configuration.files.push({
        pattern: 'node_modules/' + key + '/**/*.js',
        included: false,
        watched: false
    });
  });

  if (process.env.APPVEYOR) {
    configuration.browsers = ['IE'];
    configuration.singleRun = true;
    configuration.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  }

  config.set(configuration);
}
