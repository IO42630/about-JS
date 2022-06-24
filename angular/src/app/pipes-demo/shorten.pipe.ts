import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {

    transform(value: string, suffix?: string, foo?: string): any {
        return value.substr(0, 10) + suffix + foo;
    }

}
