import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ButtonModule } from 'primeng/button';
import { SousheadComponent } from './soushead/soushead.component';
import { AnnanceComponent } from './annance/annance.component';
import { ForumComponent } from './forum/forum.component';
import { RechercheComponent } from './recherche/recherche.component';
import { Forum2Component } from './forum2/forum2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SousheadComponent,
    AnnanceComponent,
    ForumComponent,
    RechercheComponent,
    Forum2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
