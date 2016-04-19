import {Component, Inject} from "ng-metadata/core";
import {QuestionSvc} from "../services/question.service";
import html = require("./my-app.html"); // require external HTML relative path is based on 'app' source folder

// IGNORE ERROR TS2307: Cannot find module './my-app.html' UNTIL ISSUE #6615 IS CLOSED(https://github.com/Microsoft/TypeScript/issues/6615)
// OR USE IMPORT WITH FULLPATH TO LOAD THE TEMPLATE HERE
// import * as html from "app/components/my-app.html";
// AND HACK A CORRESPONDING DECLARE MODULE IN typings-manual-fix.d.ts
// declare module "app/components/my-app.html" {
//      const template: string;
//      export default template;
// }

@Component({
    selector: "my-app",
    template: html.default
})
export class AppCmp {
    constructor( // inject dependency into constructor
    // for basic factories (like angular 1.x) you must explict @Inject with string token
        @Inject("$window") private win: angular.IWindowService,
    // for services defined as TS class decorated with @Injectable you can leverage TS reflect-metadata by Type without explicit @Inject
        qs: QuestionSvc
    ) {
        this.title = "ngMetadata";
        qs.getQuestions().then(q => this.question = q );
    }

    // property exposed to template via $ctrl (controllerAs default alias)
    public title: string;
    public question: string;
    // method exposed to template via $ctrl (controllerAs default alias)
    public show(response) {
        this.win.alert(`Thanks for your response:\n${response}!`);
    }
}
