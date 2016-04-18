import {Component} from "ng-metadata/core";
import html from "app/components/my-app.html!"; // LOADING TEMPLATE HTML FROM EXTERNAL FILE WITH .html! SYSTEMJS PLAGIN
// TO AVOID TS2307 ERROR YOU MUST USE ABSOLUTE PATH AND DECLARE MODULE IN    typings/tempfix-plugin-tsc-issue-6615.d.ts

// WIP uncomment this section to load tpl or try this code but it's NOT working and give TS compile error: import tpl from "./my-app.html";
// declare const require: (moduleOrPath: string) => any;
// const tpl = require("./my-app.html");

@Component({
    selector: "my-app",
    template: html // WIP replate with tpl here
})
export class AppCmp {
    constructor() {}
}
