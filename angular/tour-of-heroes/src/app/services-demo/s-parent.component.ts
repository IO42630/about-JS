import { Component } from '@angular/core';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { CommunicationService } from './communication.service';

@Component({
    selector: 'app-services-demo',
    template: `
        <app-s-child></app-s-child>
        <button (click)="onClick()">Parent Click</button>
        <button (click)="sendEvent()">Parent send Event</button>
    `,
    providers: [LoggingService, DataService, CommunicationService]
})
export class SParentComponent {

    constructor(
        private dataService: DataService,
        private loggingService: LoggingService,
        private communicationService: CommunicationService
    ) {
        this.loggingService.caller = 'parent';
    } // this constitutes an injection

    onClick() {
        this.dataService.data.push('P');
        this.loggingService.logSome(this.dataService.data.toString());
    }

    sendEvent() {
        this.communicationService.emitter.emit('payload');
    }

}
