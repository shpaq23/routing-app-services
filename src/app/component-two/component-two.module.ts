import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTwoComponent } from 'src/app/component-two/component-two.component';
import { RouterModule } from '@angular/router';
import { ComponentTwoService } from 'src/app/component-two/component-two.service';
import { registerProvider } from 'src/app/registerProviderFn';


@NgModule({
  declarations: [
    ComponentTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ComponentTwoComponent }])
  ],
  providers: [
    registerProvider(ComponentTwoService)
  ]
})
export class ComponentTwoModule {
}
