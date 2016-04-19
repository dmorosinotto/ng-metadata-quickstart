// main entry point 
import {bootstrap} from "ng-metadata/platform";
import {AppModule} from "./app.module";

// import CSS (SystemJS will inject it into the document)
import "./styles.css!"; // IMPORTING DIRECTLY CSS USING SYSTEMJS PLUGIN css! INCLUDE IT IN HEAD
// ALTERNATIVE: require("./styles.css"); // require external CSS - relative path is based on .js loaded so need to copy assets in ./dist

// that boostrap the app.module
bootstrap(AppModule);
