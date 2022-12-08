import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
      

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent}  from '../Core/header/header.component';
import { TopPostsComponent } from 'src/Core/top-posts/top-posts.component';
import { ListaDePostsComponent } from 'src/Core/lista-de-posts/lista-de-posts.component';
import { FootersComponent } from 'src/Shared/footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopPostsComponent,
    ListaDePostsComponent,
    FootersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
