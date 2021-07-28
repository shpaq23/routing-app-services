import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {
    path: 'component-one',
    loadChildren: () => import('./component-one/component-one.module').then(m => m.ComponentOneModule)
  },
  {
    path: 'component-two',
    loadChildren: () => import('./component-two/component-two.module').then(m => m.ComponentTwoModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
