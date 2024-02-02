import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ReponseComponent } from './reponse/reponse.component';

const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'forum/topic/:id', component: ReponseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
