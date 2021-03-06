#ngMetadata Quickstart
Sample project to quickstart an Angular 1.x application with Typescript 
using [ngMetadata](https://github.com/ngParty/ng-metadata) to be ready to easly migrate to [NG2](https://angular.io) when it'll be ready!

##Prerequisite
Prerequisite that you need to install before starting project
- Download and install [node >4.x](https://nodejs.org/en/download/)
- Globally install Typescript , typings
```
npm i -g  typescript  
npm i -g  typings
```
- Optionally install `npm i -g  http-server` to serve page locally

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
npm i --save-dev  typescript  tslint
npm i -g typings
typings init
typings install  jquery  angular  --save  --ambient
```

####Folder structure
```
\ - app                             <-- contains all your Typescript code
|    \ - components     
|    |    \ - my-app.component.ts   <-- sample component
|    | - app.module.ts              <-- define app module
|    \ - startup.ts                 <-- entry point boostrap angular app
|
| - dist                            <-- output directory for transpiled code TS->JS
| - index.html                      <-- initial page that load ambient dependency: SystemJS, Reflect-metadata 
| - system.conf.js                  <-- SystemJS configuration for loading module starting from 'app/startup' entrypoint 
\ - tsconfig.json                   <-- configure compiler (tsc) to build Typescript code 
```

Configure [tsconfig.json](tsconfig.json) to build **Typescipt** app files and output js to `dist` folder, 
and setup [SystemJS](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md) into [systemjs.conf.js](systemjs.conf.js) 
to load the **Angular** `app` module bootstrapping it with ngMetadata from `app/startup` . 
And finally setup some scripts in [package.json](package.json) to automate `build` and `serve`

###OTHER SETUP AND SAMPLE
This repo contains other SystemJS config and TS sample, to test different setup checkout branches:
- [`browserify`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/browserify) sample with TS compiled using Browserify + Tsify to build single bundle from commonjs/node modules
- [`bundle`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/bundle) sample with TS compiler set with outFile to produce dist/app-bundle.js using system
- [`outdir`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/outdir) sample with TS compiler set with outDir to produce all js in dist folder using commonjs
- [`plugins`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/plugins) sample using SystemJS plugins to load external component html and include css styles
- [`test`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/test) sample showing how to configure test with karma (contrib by *Michael de Lang* [@Oipo](https://github.com/Oipo))
