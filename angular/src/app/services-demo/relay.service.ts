import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root' /* same as adding to providers: [] in AppModule */
})
export class RelayService {

    emitter: EventEmitter<string> = new EventEmitter<string>();

}
