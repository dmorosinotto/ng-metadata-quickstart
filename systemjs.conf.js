var SystemConfig = (function() {
    // List your node_modules packages here
    var packages = [
        'angular-material',
        'angular-mocks',
        'ng-metadata',
        'reflect-metadata'
    ];

    var config = {
        baseUrl: '.',
        paths: {
            'npm:*': 'node_modules/*'
        },
        map: {
            "css": "npm:systemjs-plugin-css/css.js",
            "html": "npm:systemjs-plugin-text/text.js",
            "chai": "npm:chai/chai.js",
            "util": "npm:util/util.js",
            "inherits": "npm:inherits/inherits.js",
            "angular": "npm:angular/angular.js"
        },
        packages: {
            'app': {
                format: 'register',
                defaultExtension: 'js'
            },
            'test': {
                format: 'register',
                defaultExtension: 'js'
            }
        }
    };

    //TODO figure out why chai & angular & util & inherits don't work with this
    for (var i = packages.length - 1; i >= 0; i--) {
        var package = packages[i];
        config.map[package] = 'npm:' + package;
        config.packages[package] = {
            defaultExtension: 'js'
        };
    }

    System.config(config);
})();
