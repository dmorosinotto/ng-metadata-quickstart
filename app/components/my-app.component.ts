import {Component} from "ng-metadata/core";

@Component({
    selector: "my-app",
    template: `<h1>My First ngMetadata App</h1>
               To learn how to build an <a href="https://angularjs.org">Angular 1.x</a> app using component-style, 
               writing code in <a href="https://www.typescriptlang.org">Typescript</a> in an effective way, 
               and be ready to migrate to <a href="https://angular.io">NG2</a>
               <h3>JUST USE <a href="https://github.com/ngParty/ng-metadata">ngMetadata</a>!</h3>`
})
export class AppCmp {
    constructor() {}
}