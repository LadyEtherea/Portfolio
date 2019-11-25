import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import {Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(private element : ElementRef, public location: Location) {}
    ngOnInit() {
    }
}
