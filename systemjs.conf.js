var SystemConfig = (function() {
    // List your node_modules packages here
    var packages = [
        "ng-metadata",
        "reflect-metadata",
    ];

    var config = {
        baseUrl: "./",
        paths: {
            "npm:*": "node_modules/*"
        },
        map: {
            "angular": "npm:angular/angular.min.js"
            ,"css": "npm:systemjs-plugin-css/css.js"    //enable css plugins for import *.css!
            ,"html": "npm:system-text/text.js"          //enable text plugins for import *.html!
        },
        packages: {
            // npm packages are injected here
        },
        meta: {
            "angular": {
                "format": "global",
                "exports": "angular"
            }
            , "*.html": { // use html plugins for require(*.html) relative to 'app' source dir
                loader: "html"
            }
            , "*.css": { // use css plugins for require(*.css) relative to 'app' source dir
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
    
    // Load 'app/startup' compiled by TS into app_bundle.js (this will boostrap angular and the app.module)  
    System.import( "app/startup" ).catch( console.error.bind( console ) );
})();