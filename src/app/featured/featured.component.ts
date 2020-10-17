import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {Newservice} from "../domain/newservice.service";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    constructor(private service:Newservice) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.service.limpiar();
        this.service.agregar("Item 1");
        this.service.agregar("Item 2");
        this.service.agregar("Item 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x):void{

    }
}
