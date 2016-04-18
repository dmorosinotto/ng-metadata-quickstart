#ngMetadata Quickstart
Sample project to quickstart an Angular project with Typescript using [ngMetadata](https://github.com/ngParty/ng-metadata)

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
npm i --save  systemjs-plugin-css  system-text
npm i --save-dev  typescript  tslint
typings init
typings install  jquery  angular  --save  --ambient
```

Folder structure
```
\ - app                             <-- contains all your Typescript code
|    \ - components     
|    |    | - my-app.component.ts   <-- sample component with external html
|    |    \ - my-app.html           <-- sample component html loaded by plugin
|    | - app.module.ts              <-- define app module
|    | - styles.css                 <-- sample css styles loaded by plugin
|    \ - startup.ts                 <-- entry point boostrap angular app
|
| - dist                            <-- output directory for transpiled code TS->JS
| - index.html                      <-- initial page that load ambient dependency: SystemJS, Reflect-metadata 
| - system.config.js                <-- SystemJS configuration for loading module startinf from 'app/startup' entrypoint  
\ - tsconfig.json                   <-- configure compiler (tsc) to build Typescript code 
```

Configure [tsconfig.json](tsconfig.json) to build **Typescipt** app files and output js to `dist` folder, 
and setup [SystemJS](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md) into [systemjs.config.js](systemjs.config.js) 
to load the **Angular** `app` module bootstrapping it with ngMetadata from `app/startup` . 
And finally setup some scripts in [package.json](package.json) to automate `build` and `serve`


###BRANCH `plugins`
This branch use SystemJS [plugins](package.json#L35-L36) to load external resources: [*.html!](app/components/my-app.component.ts#L2) for component and [*.css!](app/startup.ts#L6) style,
see changes in [systemjs.conf.js](systemjs.conf.js#L15-L16) to handle the configuration neccessary.

###OTHER SETUP AND SAMPLE
This repo contains other SystemJS config and TS sample, to test different setup checkout branches:
- [`bundle`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/bundle) sample with TS compiler set with outFile to produce dist/app-bundle.js using system
- [`outdir`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/outdir) sample with TS compiler set with outDir to produce all js in dist folder using commonjs
- [`plugins`](https://github.com/dmorosinotto/ng-metadata-quickstart/tree/plugins) sample using SystemJS plugins to load external component html and include css styles