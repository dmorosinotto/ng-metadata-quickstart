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
            "angular": "npm:angular/angular.min.js"
            ,"css": "npm:systemjs-plugin-css/css.js"    // enable css plugins for import *.css!
            ,"html": "npm:system-text/text.js"          // enable text plugins for import *.html!
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
            , "*.html": { // use html plugins for require(*.html) relative to dist outDir
                loader: "html"
            }
            , "*.css": { // use css plugins for require(*.css) relative to dist outDir
                loader: "css"
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
    
    // Load entrypoint 'app' --> 'app/startup' compiled by TS into outDir = dist (this will boostrap angular and the app.module)  
    System.import( "app" ).catch( console.error.bind( console ) );
})();