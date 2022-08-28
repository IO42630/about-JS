import { Component } from '@angular/core';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { RelayService } from './relay.service';

@Component({
    selector: 'app-s-child',
    template: `
        <button type="button" class="btn btn-light" (click)="onClick()">Push C to Data from Child</button>
    `,
    providers: [LoggingService]
})
export class SChildComponent {

    constructor(
        private dataService: DataService, /* this constitutes an injection */
        private loggingService: LoggingService,
        private communicationService: RelayService
    ) {
        this.loggingService.caller = 'child';
        this.communicationService.emitter.subscribe(payload => this.loggingService.logSome('received ' + payload));
    }

    onClick() {
        this.dataService.data.push('C');
        this.loggingService.logSome(this.dataService.data);
    }

}
