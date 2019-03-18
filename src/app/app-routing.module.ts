import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CofferOrderComponent } from './coffe-order/coffe-order.component';

const routes: Routes = [
  { path: '', component: CofferOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
