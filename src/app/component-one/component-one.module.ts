import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from 'src/app/component-one/component-one.component';
import { RouterModule } from '@angular/router';
import { ComponentOneService } from 'src/app/component-one/component-one.service';
import { registerProvider } from 'src/app/registerProviderFn';
import { ProvidersStore } from 'src/app/ProvidersStore';
import { ComponentOneTwoService } from 'src/app/component-one/component-one-two.service';


@NgModule({
  declarations: [
    ComponentOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ComponentOneComponent }])
  ],
  providers: [
    ProvidersStore,
    registerProvider(ComponentOneService),
    registerProvider(ComponentOneTwoService),
  ]
})
export class ComponentOneModule {
  constructor(private readonly provideStore: ProvidersStore) {
  }
}
