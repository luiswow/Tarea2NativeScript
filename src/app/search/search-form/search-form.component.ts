import { Component, EventEmitter, OnInit, Output } from "@angular/core";


@Component({
    selector: "SearchForm",
    template: `
        <TextField [(ngModel)]="textFieldValue" hint="Ingresar texto..."></TextField>
        <Button text="Buscar!" (tap)="onButtonTap()"></Button>
    `,
    moduleId:module.id
})
export class SearchFormComponent implements OnInit {
    textFieldValue:string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("Texto de prueba: punto 4 lección 1");
    }

    onButtonTap():void{
        if (this.textFieldValue.length > 2){
            this.search.emit(this.textFieldValue);
        }
    }

}
