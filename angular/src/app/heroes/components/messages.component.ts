import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
    selector: 'app-messages',
    template: `
        <div *ngIf="messageService.messages.length">
            <h2>Messages</h2>
            <button class="clear"
                (click)="messageService.clear()">clear
            </button>
            <div *ngFor='let message of messageService.messages'> {{message}} </div>
        </div>
    `
})
export class MessagesComponent implements OnInit {

    constructor(public messageService: MessageService) {}

    ngOnInit() { }

}
