import {Component} from "ng-metadata/core";
const html = require("./my-app.html"); // require external HTML - relative path is based on .js loaded so need to copy assets in ./dist

@Component({
    selector: "my-app",
    template: html
})
export class AppCmp {
    constructor() {}
}
