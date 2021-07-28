import { Injectable, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Injectable()
export class ComponentTwoService implements OnDestroy {

  constructor() {
    console.log('ComponentTwoService - constructor');
    interval(1000)
      .subscribe(val => {
        console.log('ComponentTwoService', val);
      })
  }

  ngOnDestroy() {
    console.log('ComponentTwoService - On Destroy');
  }

}
