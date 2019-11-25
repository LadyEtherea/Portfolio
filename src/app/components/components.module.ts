import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule
    ],
    declarations: [
        ComponentsComponent,
        AboutmeComponent,
        NgbdModalComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
