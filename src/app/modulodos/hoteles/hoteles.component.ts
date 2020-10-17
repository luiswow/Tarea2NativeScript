import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Hotelesservice } from "~/app/domain/hoteles.service";

@Component({
    selector: "Hoteles",
    templateUrl: "./hoteles.component.html"
})
export class HotelesComponent implements OnInit {

    constructor(private service:Hotelesservice, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.service.limpiar();
        this.service.agregar("Hotel 1");
        this.service.agregar("Hotel 2");
        this.service.agregar("Hotel 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x):void{
        this.routerExtensions.navigate(["/modulodos/opcionesusuario"], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
