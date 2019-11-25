import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h4 class="modal-title text-center">Presentation</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> 
        <p> Hello everyone my is name Noelia, nice to meet you. </p>
        <p>
            I've been working as a software developer for two years now and I have a large experience in front-end design and developing as well as back-end design and developing.
        </p>
        <p>
            You may not know anything about me so I made this simple app to show you a bit more about me, my knowledge and my experience.
        </p>
        <p>
            I hope we can work toguether in the future and create wonderful software!
        </p>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name:String;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'Hello';
    }
}