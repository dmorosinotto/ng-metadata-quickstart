// THIS IS A TEMPORARY FIX TO AVOID TSC COMPILE ERROR TS2307 WHEN IMPORTING TEMPLATE HTML USING SYSTEMJS PLUGINS .html!
// WAITING FOR TYPESCRIPT ISSUE #6615 TO BE MERGED https://github.com/Microsoft/TypeScript/issues/6615

declare module 'app/components/my-app.html!' { // MUST USE FULLPATH BECOUSE TS DON'T ALLOW DECLARE MODULE NAME RELATIVE './..'
    const template: string;
    export default template;
}