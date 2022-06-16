import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    caller: string;

    logSome(message: any) {
        console.log('logging from ' + this.caller + ' ' + message);
    }
}
