import { Component, Injector, OnInit } from '@angular/core';
import { ComponentTwoService } from 'src/app/component-two/component-two.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private readonly service: ComponentTwoService,
              private readonly injector: Injector) { }

  ngOnInit(): void {
    console.log('ComponentTwoComponent - injector', this.injector);
    this.injector.get(ComponentTwoService);
  }

}
