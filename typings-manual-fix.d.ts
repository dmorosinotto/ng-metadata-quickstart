// FIX: GLOBAL AMBIENT DECLARE TO VALIDATE COMPILE OF require(...) FOR IMPORTING HTML/CSS IN TYPESCRIPT VIA PLUGINS
declare const require: (pathToHtmlOrCss: string) => any;

// IGNORE ERROR TS2307: Cannot find module './my-app.html' UNTIL ISSUE #6615 IS CLOSED(https://github.com/Microsoft/TypeScript/issues/6615)
// OR USE IMPORT WITH FULLPATH TO LOAD THE TEMPLATE IN app/components/my-app.component.ts
// import * as html from "app/components/my-app.html";
// AND HACK A CORRESPONDING DECLARE MODULE HERE IN typings-manual-fix.d.ts
// declare module "app/components/my-app.html" {
//      const template: string;
//      export default template;
// }