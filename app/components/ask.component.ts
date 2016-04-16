import {Component, Input, Output, OnInit, AfterViewInit} from "ng-metadata/core";


@Component({
    selector: "ask",
    template: `<b>Q:</b> {{$ctrl.question}} ? <input ng-model="$ctrl.response">
               <button ng-click="$ctrl.answer()">Answer</button>`
})
export class AskCmp implements OnInit {
    @Input("@") public question: string; //specify input with '@' binding (interpolate)
    @Output() public onResponse: EventEmitter<onResponseEventArg>; //specify output default '&' binding
    
    _c: Function;
    _i: Function;
    _a: Function;
    constructor() {
        this._c = this.onResponse;
        console.log("CTOR",this.onResponse);
        //this.onResponse.emit = (r) => EventEmitter_emit(this.onResponse,r);
        EventEmitter_attach_emit(this.onResponse);
    }
    
    ngOnInit() { //implement life-cycle hook to initialize component
        console.info("Initialize ASK component");
        console.assert(!!this.question, "question not setted!");
        console.assert(!!this.onResponse, "onResponse handle not setted!");
        this._i = this.onResponse;
        console.log("INIT", this.onResponse);
        console.assert(this._c === this._i, "NON SONO UGUALI");
        console.assert(!!this.onResponse.emit, "INIT NON HA EMIT")
    }
    
    ngAfterViewInit() {
        console.info("After view Init");
        this._a = this.onResponse;
        console.log("AFTER",this.onResponse);
        console.assert(this._c === this._a, "NON != CTOR");
        console.assert(this._i === this._a, "NON != INIT");
        console.assert(!!this.onResponse.emit, "AFTER NON HA EMIT")
    
    }
    
    protected response: string;
    protected answer() {
        if (this.response && this.response.trim()!=="") {
            this.onResponse.emit({resp: this.response});  //WHAT I WANT TO WRITE
            //EventEmitter_emit(this.onResponse, {resp: this.response});
            //this.onResponse({ $event: this.response });   //WHAT IT DOES
        }
    }
}

export type onResponseEventArg = {resp:string};
/*
export function EventEmitter_emit<T>(fn: EventEmitter<T>, value:T) {
    console.warn("EMITTING", value);
    fn({$event: value});
}
*/
function EventEmitter_attach_emit<T>(onEventProperty: EventEmitter<T>) {
    onEventProperty.emit = (value:T) => {
        console.info("EMIT LIFT",value);
        onEventProperty({$event: value});
    }
}

export interface EventEmitter<T> extends Function {
    emit($event: T):void;
}

export interface EventHandler<T> {
    ($event:T):any
}
/*
export interface onResponseHandle {
    ({$event}: {$event:string}):void;
}
*/