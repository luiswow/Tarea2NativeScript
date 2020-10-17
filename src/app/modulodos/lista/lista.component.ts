import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {Newservice} from "../../domain/newservice.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Lista",
    templateUrl: "./lista.component.html"
})
export class ListaComponent implements OnInit {

    constructor(private service:Newservice, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.service.limpiar();
        this.service.agregar("Zona 1");
        this.service.agregar("Zona 2");
        this.service.agregar("Zona 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x):void{
        this.routerExtensions.navigate(["/modulodos/hoteles"], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
