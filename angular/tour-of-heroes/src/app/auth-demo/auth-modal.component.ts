import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-modal',
  template: `
    <ng-template #mymodal let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Bootstrap Modal</h4>
        <button type="button" class="close" aria-label="Close"
            (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text">
        <input type="text">
      </div>
      <div class="modal-footer">
        <button type="button"
            class="btn btn-outline-dark"
            (click)="this.okButton()"
        >Ok</button>
        <button (click)="this.cancelButton()"
        >Calcel</button>
      </div>
    </ng-template>
  `,
  styles: [
  ]
})
export class AuthModalComponent {

  @ViewChild('mymodal') mymodal;

  constructor(
      private modalService: NgbModal,
      private auth: AuthService
  ) {}

  open() {
    this.modalService.open(this.mymodal, {ariaLabelledBy: 'modal-basic-title'});
  }

  okButton() {
    this.mymodal.close();
    this.auth.login();
  }

  cancelButton() { }

}
