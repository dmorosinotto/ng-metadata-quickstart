/// <reference path="../typings/browser.d.ts" />
/// <reference path="../typings/tempfix-plugin-tsc-issue-6615.d.ts" />
/// <reference path="../typings/workaround-ngmocks.d.ts" />
/// <reference path="../typings/browser/ambient/angular-mocks/index.d.ts" />

import {expect} from 'chai';
import {AppCmp} from '../app/components/my-app.component';
import {AppModule} from '../app/app.module';
import {renderFactory, IRender} from 'ng-metadata/testing';
import * as angular from 'angularmocks';

let $compile: ng.ICompileService;
let $rootScope: ng.IRootScopeService;
let $scope;
let render: IRender;

describe('my-app.component', () => {

    beforeEach(() => {
        angular.mock.module(AppModule);
    });

    beforeEach(angular.mock.inject((_$injector_: ng.auto.IInjectorService) => {
        const $injector = _$injector_;
        $compile = $injector.get<ng.ICompileService>('$compile');
        $rootScope = $injector.get<ng.IRootScopeService>('$rootScope');
        $scope = $rootScope.$new();

        render = renderFactory($compile, $scope);
    }));

    it(`should create the DOM and compile`, () => {
        const attrs = { };
        $scope.model = 'Martin!';
        // here we go!
        // it returns instance and compiled DOM
        const {compiledElement, ctrl} = render(AppCmp, { attrs: attrs });

        expect(ctrl instanceof AppCmp).to.equal(true);
        expect(compiledElement[0].outerHTML).to.contain('writing code');
    });

});
