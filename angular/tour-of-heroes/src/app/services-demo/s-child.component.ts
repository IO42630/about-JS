import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { CommunicationService } from './communication.service';

@Component({
    selector: 'app-s-child',
    template: `
        <button (click)="onClick()">Child Click</button>
    `,
    providers: [LoggingService] //
})
export class SChildComponent {

    constructor(
        private dataService: DataService, /* this constitutes an injection */
        private loggingService: LoggingService,
        private communicationService: CommunicationService
    ) {
        this.loggingService.caller = 'child';

        this.communicationService.emitter.subscribe(payload => console.log('event received', payload));
    }

    onClick() {
        this.dataService.data.push('S');
        this.loggingService.logSome(this.dataService.data);
    }

}
