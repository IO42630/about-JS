import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-auth-modal',
  template: `
    <div class="backdrop" (click)="onClose()"></div>
    <div class="alert-box">
      <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button
            class="btn btn-dark"
            (click)="onClose()">x
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
            (click)="onClose()"
        >Cancel
        </button>
      </div>
    </div>>
  `,
  styles: []
})
export class AuthModalComponent {

  @Output() close = new EventEmitter<void>();


  constructor(
      private modalService: NgbModal,
      private auth: AuthService
  ) {
    console.log('this is prod: ', environment.production);
  }


  okButton() {
    this.auth.login();
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }

}
