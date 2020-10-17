import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Opcionesusuarioservice } from "~/app/domain/opcionesusuario.services";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "opcionesusuario",
    templateUrl: "./opcionesusuario.component.html"
})
export class OpcionesusuarioComponent implements OnInit {

    constructor(private service:Opcionesusuarioservice, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.service.limpiar();
        this.service.agregar("Usuario: Carlos Perez");
        this.service.agregar("Usuario: Pablo Martinez'");
        this.service.agregar("Usuario: Carolina Mendez'");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x):void{
        this.routerExtensions.navigate(["/modulodos/detalle"], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    onTap(x):void{
        var opciones = this.service.buscar();
        if(opciones.length > 0){
            this.service.eliminarUltimo();
            this.doLater(
                () => {
                    dialogs.alert(
                        "Opción de usuario eliminada"
                    );
                }
            );
        }
    }

    agregarUsuario():void{
        this.doLater(() =>{
            dialogs.action("Agregar opciones de usuario para: ", "Cancelar",[" Luis Sánchez"," José Marquez"])
            .then((result) =>{
                this.service.agregar("Usuario: "+result);
                this.doLater(
                    () => {
                        dialogs.alert(
                            "Opción de usuario agregada"
                        );
                    }
                );
            });
        });
    }



    doLater(fn){setTimeout(fn,200)};
}
