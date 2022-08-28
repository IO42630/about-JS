import { Component } from '@angular/core';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { RelayService } from './relay.service';

@Component({
    selector: 'app-services-demo',
    template: `
        <app-s-child></app-s-child>
        <br>
        <div class="btn-group-vertical mt-4">
            <button type="button" class="btn btn-light" (click)="onClick()">Push P to Data from Parent</button>
            <button type="button" class="btn btn-light" (click)="sendEvent()">Parent send Event</button>
        </div>

    `,
    providers: [LoggingService, DataService, RelayService]
})
export class SParentComponent {

    constructor(
        private dataService: DataService, /* this constitutes injection */
        private loggingService: LoggingService,
        private communicationService: RelayService
    ) {
        this.loggingService.caller = 'parent';
    }

    onClick() {
        this.dataService.data.push('P');
        this.loggingService.logSome(this.dataService.data.toString());
    }

    sendEvent() {
        const payload = this.dataService.data.toString();
        this.loggingService.logSome('sending ' + payload);
        this.communicationService.emitter.emit(payload);
    }

}
