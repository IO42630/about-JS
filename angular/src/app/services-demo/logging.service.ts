import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    caller: string;

    logSome(message: any) {
        console.log('Logging from ' + this.caller + ' [ ' + message + ' ]');
    }

}
