import {Component, Input, Output, OnInit} from "ng-metadata/core";


@Component({
    selector: "ask",
    template: `<b>Q:</b> {{$ctrl.question}} ? <input ng-model="$ctrl.response">
               <button ng-click="$ctrl.answer()">Answer</button>`
})
export class AskCmp implements OnInit {
    @Input("@") public question: string; // specify input with '@' binding (interpolate)
    @Output() public onResponse: Function; // specify output default '&' binding

    ngOnInit() { // implement life-cycle hook to initialize component
        console.info("Initialize ASK dumb component");
        console.assert(!!this.question, "question not setted!");
        console.assert(!!this.onResponse, "onResponse handle not setted!");
    }

    protected response: string;
    protected answer() {
        if (this.response && this.response.trim() !== "") {
            this.onResponse({ $event: this.response });
        }
    }
}
