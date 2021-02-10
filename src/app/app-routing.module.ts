import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/product/create/create.component';
import { ReadComponent } from './pages/product/read/read.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'product', component: CreateComponent},
  {path:'list', component: ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
