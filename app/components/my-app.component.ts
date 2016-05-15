import { Component, Inject } from "ng-metadata/core";
import { QuestionSvc } from "../services/question.service";

@Component({
    selector: "my-app",
    template: `<h1>My First {{$ctrl.title}} App</h1>
               To learn how to build an <a href="https://angularjs.org">Angular 1.x</a> app using component-style, 
               writing code in <a href="https://www.typescriptlang.org">Typescript</a> in an effective way, 
               and be ready to migrate to <a href="https://angular.io">NG2</a>
               <h3>JUST USE <a href="https://github.com/ngParty/ng-metadata">ngMetadata</a>!</h3>
               <hr>
               <ask question="{{$ctrl.question}}" on-Response="$ctrl.show($event)"></ask>`
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
