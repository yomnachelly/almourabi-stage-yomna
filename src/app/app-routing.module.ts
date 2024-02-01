import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forum2Component } from './forum2/forum2.component';
import { RechercheComponent } from './recherche/recherche.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForumComponent } from './forum/forum.component';
import { Titre1Component } from './titre1/titre1.component';
const routes: Routes = [
 

  { path: 'titre1', component:Titre1Component },
  { path: '', component:HomePageComponent },
  { path: 'forum', component:ForumComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {  }
