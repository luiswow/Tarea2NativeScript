import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { backgroundImageProperty, Color, View } from "tns-core-modules/ui/core/view/view";
import {Newservice} from "../domain/newservice.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    @ViewChild("layout", { static: true }) layout:ElementRef;

    resultados:Array<string>;
    constructor(private service:Newservice) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.service.limpiar();
        this.service.agregar("Item 1");
        this.service.agregar("Item 2");
        this.service.agregar("Item 3");
        this.service.agregar("Item 4");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    buscarAhora(s:string):void{
        this.resultados = this.service.buscar().filter((x) => x.indexOf(s)>=0 );

        const layout = <View> this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("blue"),
            duration: 3000,
            delay: 1500
        }).then(() => layout.animate({
            backgroundColor: new Color("white"),
            duration:3000,
            delay:1500
        }));
    }
}
