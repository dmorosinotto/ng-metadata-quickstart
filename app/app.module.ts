import * as angular from "angular"; //import angular globally
import { provide } from "ng-metadata/core";

import { AppCmp } from "./components/my-app.component";
import { AskCmp } from "./components/ask.component";
import { QuestionSvc } from "./services/question.service";

//return/export the module so you can later bootsrap it in the startup using ngMetadata
export const AppModule = angular.module( "app", [] ) //define  'app'   module and register all  components  and  services  defined in other files imported above...
  .directive( ...provide( AppCmp ) )
  .directive( ...provide( AskCmp ) )
  .service( ...provide( QuestionSvc ) )
;