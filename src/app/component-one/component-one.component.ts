import { Component, OnInit } from '@angular/core';
import { ComponentOneService } from 'src/app/component-one/component-one.service';
import { ProvidersStore } from 'src/app/ProvidersStore';
import { ComponentOneTwoService } from 'src/app/component-one/component-one-two.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  constructor(private readonly serviceOne: ComponentOneService,
              private readonly serviceOneTwo: ComponentOneTwoService,
              private readonly providersStore: ProvidersStore) { }

  ngOnInit(): void {
  }

  showProviders(): void {
    this.providersStore.logProviders();
  }

  destroyServices(): void {
    this.providersStore.destroyServices();
  }

}
