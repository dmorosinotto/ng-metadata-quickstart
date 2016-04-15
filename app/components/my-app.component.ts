/// <reference path="../../typings/tempfix-plugin-tsc-issue-6615" />

import {Component} from "ng-metadata/core";
import html from "app/components/my-app.html!"; //LOADING TEMPLATE HTML FROM EXTERNAL FILE WITH .html! SYSTEMJS PLAGIN
//TO AVOID TS2307 ERROR YOU MUST USE ABSOLUTE PATH AND DECLARE MODULE IN    typings/tempfix-plugin-tsc-issue-6615.d.ts

@Component({
    selector: "my-app",
    template: html
})
export class AppCmp {
    constructor() {}
}
