var SystemConfig = (function() {
    // List your node_modules packages here
    var packages = [
        "ng-metadata",
        "reflect-metadata",
    ];

    var config = {
        baseUrl: "./",
        paths: {
            app: "./dist",  // path outDir of transpiled TS->JS commonjs
            "npm:*": "node_modules/*"
        },
        map: {
            "angular": "npm:angular/angular.min.js",
        },
        packages: {
            // npm packages are injected here
            "app": {
                "format": "cjs",
                "defaultExtension": "js",
                "main": "startup" // specify here the entry-point for 'app' bootstrap
             }
        },
        meta: {
            "angular": {
                "format": "global",
                "exports": "angular"
            }
        }
    };

    // Add map for npm packages defined above
    for (var i = packages.length - 1; i >= 0; i--) {
        var package = packages[i];
        config.map[package] = "npm:" + package;
        config.packages[package] = {
            defaultExtension: "js"
        };
    }

    // Read more info on SystemJS config here: https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
    System.config(config);
    
    // Load 'app/startup' compiled by TS into app_bundle.js (this will boostrap angular and the app.module)  
    System.import( "app" ).catch( console.error.bind( console ) );
})();