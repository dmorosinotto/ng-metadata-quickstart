// main entry point 
import {bootstrap} from "ng-metadata/platform";
import {AppModule} from "./app.module";

// import CSS SystemJS will inject it into the document <head>
import  "./styles.css!"; // IMPORTING DIRECTLY CSS USING SYSTEMJS PLUGIN css!
// ALTERNATIVE: import css = require("./styles.css"); // require external CSS relative path is based on 'app' source folder

// that boostrap the app.module
bootstrap(AppModule);
