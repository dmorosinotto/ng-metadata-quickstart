// main entry point
import {bootstrap} from "ng-metadata/platform";
import {AppModule} from "./app.module";

// import CSS (SystemJS will inject it into the document)
import "/styles.css!"; // IMPORTING DIRECTLY CSS USING SYSTEMJS PLUGIN css! INCLUDE IT IN HEAD

// that boostrap the app.module
bootstrap(AppModule);
