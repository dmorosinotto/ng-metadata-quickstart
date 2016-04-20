var SystemConfig = (function() {
    // List your node_modules packages here
    var packages = [
        'ng-metadata',
        'reflect-metadata',
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
            "angular": "npm:angular/angular.js",
            "angularmocks": "npm:angular-mocks/angular-mocks.js",
            "traceur": "npm:traceur/bin/traceur.js"
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
        },
        meta: {
            "angular": {
                "format": "global",
                "exports": "angular"
            },
            "angularmocks": {
              "format": "global",
              "exports": "angular"
            },
            "html": {
                "format": "cjs"
            }
        },
        transpiler: "traceur"
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
