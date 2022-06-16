import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-modal',
  template: `
    <ng-template #mymodal let-modal>
      <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button
            class="btn btn-dark"
            (click)="dismiss()">x
        </button>
      </div>
      <div class="modal-body">
        <input type="text">
        <br>
        <input type="text">
      </div>
      <div class="modal-footer">
        <button type="button"
            class="btn btn-dark"
            (click)="this.okButton()"
        >Ok
        </button>
        <button
            class="btn btn-dark"
            (click)="dismiss()"
        >Cancel
        </button>
      </div>
    </ng-template>
  `,
  styles: []
})
export class AuthModalComponent {

  hidden: true;

  @ViewChild('mymodal') mymodal;

  constructor(
      private modalService: NgbModal,
      private auth: AuthService
  ) {}

  open() {
    this.modalService.open(this.mymodal, {ariaLabelledBy: 'modal-basic-title'});
  }

  okButton() {
    this.dismiss();
    this.auth.login();
  }

  dismiss() {
    this.modalService.dismissAll();
  }

}
