import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ForumComponent } from './forum/forum.component';
import { ReponseComponent } from './reponse/reponse.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stage-almourabi';


  param = "jihed";
}
