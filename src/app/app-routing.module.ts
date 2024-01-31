import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forum2Component } from './forum2/forum2.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [

  { path: 'recherche', component:RechercheComponent },
  { path: '', redirectTo: '/recherche', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
