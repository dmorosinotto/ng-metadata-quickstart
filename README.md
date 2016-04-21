#ngMetadata Quickstart
Sample project to quickstart an Angular 1.x application with Typescript 
using [ngMetadata](https://github.com/ngParty/ng-metadata) to be ready to easly migrate to [NG2](https://angular.io) when it'll be ready!

##Prerequisite
Prerequisite that you need to install before starting project
- Download and install [node >4.x](https://nodejs.org/en/download/)

##Installation and Run
Clone this repo and then simply install the dependency and run it:
```
npm install
npm start
```
Open your browser and go to [http://localhost:8080](http://localhost:8080)



###Initial setup (JUST DONE)
This step was JUST DONE to produce the repository in the current state, so you don't need to redone it!
But it may be useful to know how to start from scratch.
```
npm init -y
npm i --save  angular  reflect-metadata  systemjs  ng-metadata
typings init
typings install  jquery  angular  --save  --ambient
typings install  angular-mocks  chai  jasmine  --save-dev  --ambient
```

####Folder structure
```
\ - app                                 <-- contains all your Typescript code
|    \ - components     
|    |    \ - my-app.component.ts       <-- sample component
|    | - app.module.ts                  <-- define app module
|    \ - startup.ts                     <-- entry point boostrap angular app
|
| - index.html                          <-- initial page that configure SystemJS and load app
| - karma.conf.js                       <-- settings for karma, how to run the test and which browser etc
| - karma-test-shim.js                  <-- test helper
| - systemjs.conf.js                    <-- settings for loading modules, both for tests and serving
|
\ - test
|    \ - components
|         \ - my-app.component.spec.ts  <-- tests for my-app
|
| - tsconfig.json                       <-- configure compiler (tsc) to build Typescript code
| - tslint.json                         <-- settings for lint
\ - typings.json                        <-- which typescript typings to use
```

Configure [tsconfig.json](tsconfig.json) to build **Typescipt** app files,
and setup [SystemJS](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md) into [systemjs.conf.js](systemjs.conf.js)
to load the **Angular** `app` module bootstrapping it with ngMetadata from `startup`
And finally setup some scripts in [package.json](package.json) to automate `build` and `serve`

 ###BRANCH `test`
 - This branch show how to configure tests with karma for an Angular + ngMetadata project (contrib by *Michael de Lang* [@Oipo](https://github.com/Oipo))

###OTHER SETUP AND SAMPLE
This repo contains other SystemJS config and TS sample, to test different setup checkout branches:
- [`bundle`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/bundle) sample with TS compiler set with outFile to produce dist/app-bundle.js using system
- [`outdir`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/outdir) sample with TS compiler set with outDir to produce all js in dist folder using commonjs
- [`plugins`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/plugins) sample using SystemJS plugins to load external component html and include css styles
