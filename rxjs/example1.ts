
import * as RX from 'rxjs';
import {Observable} from "rxjs";


document.addEventListener('click', () => console.log('Clicked!'));


const basic = Observable.create(observer => {
  observer.next('A');
  observer.next('B');
  observer.next('C');
  observer.next('D');
});

basic.subscribe();
