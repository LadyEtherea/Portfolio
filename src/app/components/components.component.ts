import { Component, OnInit, Renderer } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {
    public nombre:string;
    constructor( private renderer : Renderer) {
        this.nombre = "Noelia Rodríguez Plaza";
    }

    ngOnInit() {
    }

}
