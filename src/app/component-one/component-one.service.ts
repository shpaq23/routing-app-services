import { Injectable, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class ComponentOneService implements OnDestroy {

  destroyed$ = new Subject();

  constructor() {
    console.log('ComponentOneService - constructor');
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        console.log('ComponentOneService', val);
      })

  }

  ngOnDestroy() {
    console.log('ComponentOneService - onDestroy');
    this.destroyed$.next();
  }

}
