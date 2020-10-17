import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import {isAndroid, isIOS} from 'tns-core-modules/ui/page';
import * as app from "tns-core-modules/application";

@Component({
    selector: "ComponenteUno",
    templateUrl: "./componenteUno.component.html",
    styleUrls: ["componenteuno.css"]
})
export class ComponenteunoComponent implements OnInit {
    public plataforma:string;

    constructor(private routerExtensions: RouterExtensions) {
        this.plataforma = "La plataforma es: ";

        if (isAndroid) {
            this.plataforma += "android";
        } else if (isIOS) {
            this.plataforma += "ios";
        }
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
