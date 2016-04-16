import {Component, Input, Output, OnInit, AfterViewInit} from "ng-metadata/core";

import {EventEmitter, EventEmitter_attach_emit} from "./ng-metadata_core_patch";
export type onResponseEventArg = {resp:string}; //DEFINE ARGUMENT RETURNED BY EVENT onResponse

@Component({
    selector: "ask",
    template: `<b>Q:</b> {{$ctrl.question}} ? <input ng-model="$ctrl.response">
               <button ng-click="$ctrl.answer()">Answer</button>`
})
export class AskCmp implements OnInit {
    @Input("@") public question: string; //specify input with '@' binding (interpolate)
    @Output() public onResponse: EventEmitter<onResponseEventArg>; //specify output default '&' binding
    
    constructor() {
        //Attach emit method to onResponse Function (event)
        EventEmitter_attach_emit(this.onResponse);
    }
    
    ngOnInit() { //implement life-cycle hook to initialize component
        console.info("Initialize ASK component");
        console.assert(!!this.question, "question not setted!");
        console.assert(!!this.onResponse, "onResponse handle not setted!");
        console.assert(!!this.onResponse.emit, "emit was not found/attached!?")
    }
    
    ngAfterViewInit() {
        console.info("After view Init");
        console.assert(!!this.onResponse.emit, "emit was not found/attached!?")
    }
    
    protected response: string;
    protected answer() {
        if (this.response && this.response.trim()!=="") {
            this.onResponse.emit({resp: this.response});  //WHAT I WANT TO WRITE
            //this.onResponse({ $event: this.response }); //WHAT IT DOES! (thanks to EventEmitter_attach_emit)
        }
    }
}