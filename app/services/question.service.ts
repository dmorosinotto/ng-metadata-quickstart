import {Injectable, Inject} from "ng-metadata/core";

@Injectable() // define a service as a class and decorate it with @Injectable to leverage TS reflect-metadata by Type
export class QuestionSvc {
    constructor( // inject dependency into constructor
    // for basic factories (like angular 1.x) you must explict @Inject with string token
        @Inject("$log") private log: angular.ILogService,
        @Inject("$q") private $q: angular.IQService
    ) {
        this._q = "What is your name";
    }

    private _q: string;
    public getQuestions(): angular.IPromise<string> {
        this.log.info("getQuestions:", this._q);
        return this.$q.when(this._q);
    }
}
