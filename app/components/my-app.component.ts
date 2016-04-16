import {Component, Inject} from "ng-metadata/core";
import {QuestionSvc} from "../services/question.service";
import html from "app/components/my-app.html!"; //LOADING TEMPLATE HTML FROM EXTERNAL FILE WITH .html! SYSTEMJS PLAGIN
//TO AVOID TS2307 ERROR YOU MUST USE ABSOLUTE PATH AND DECLARE MODULE IN    typings/tempfix-plugin-tsc-issue-6615.d.ts

import {EventHandler, onResponseEventArg} from "./ask.component"

@Component({
    selector: "my-app",
    template: html //I PREFER INLINE TEMPLATE, BUT YOU CAN USE SYSTEMJS PLUGIN .html! TO LOAD EXTERNAL FILE
})
export class AppCmp {
    constructor( //inject dependency into constructor
    //for basic factories (like angular 1.x) you must explict @Inject with string token
        @Inject("$window") private win: angular.IWindowService,
    //for services defined as TS class decorated with @Injectable you can leverage TS reflect-metadata by Type without explicit @Inject
        qs: QuestionSvc
    ) {
        this.title = "ngMetadata";
        qs.getQuestions().then(q => this.question = q );
    }
    
    //property exposed to template via $ctrl (controllerAs default alias)
    public title: string;
    public question: string;
    //method exposed to template via $ctrl (controllerAs default alias)
    public show: EventHandler<onResponseEventArg> =
    ($e) => {
        this.win.alert(`Thanks for your response:\n${$e.resp}!`);   
    } 
}