import { Injectable } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RandomthreadService {

  private refCount = 0;
  constructor() { }

  fetchData(howMuch?: number): Observable<number> {
    const source$ = interval(100);
    return (howMuch) ? source$.pipe(take(howMuch)) : source$;
  }

  subscriptionCount(byValue?: number) {
    const sourse$ = of({});
    return this.refCount += byValue;
  }

}
