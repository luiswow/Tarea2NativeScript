import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


@Component({
    selector: "Edicion",
    templateUrl: "./edicion.component.html"
})
export class EdicionComponent implements OnInit {
    private mails:Array<string>;
    textFieldValue:string = "";
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.mails.push("Luis");

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onButtonTap():void{
        this.mails.push(this.textFieldValue);
    }
}
