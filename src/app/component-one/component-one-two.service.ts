import { Injectable, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class ComponentOneTwoService implements OnDestroy {

  destroyed$ = new Subject();

  constructor() {
    console.log('ComponentOneTwoService - constructor');
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        console.log('ComponentOneTwoService', val);
      })

  }

  ngOnDestroy() {
    console.log('ComponentOneTwoService - onDestroy');
    this.destroyed$.next();
  }

}
