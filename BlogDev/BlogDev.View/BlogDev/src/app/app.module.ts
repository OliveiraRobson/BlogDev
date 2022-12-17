import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { Route, RouterModule, Routes } from '@angular/router';
      

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent}  from '../Core/header/header.component';
import { TopPostsComponent } from 'src/Core/top-posts/top-posts.component';
import { ListaDePostsComponent } from 'src/Core/lista-de-posts/lista-de-posts.component';
import { FootersComponent } from 'src/Shared/footers/footers.component';
import { ConteudoPostComponent } from 'src/Core/conteudo-post/conteudo-post.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from 'src/Core/side-menu/side-menu.component';
import { BlogAreaComponent } from 'src/Core/blog-area/blog-area.component';



const appRoutes:Routes =[
  {path:'',component:HomeComponent},
  {path:'ConteudoPost', component:ConteudoPostComponent,},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopPostsComponent,
    ListaDePostsComponent,
    FootersComponent,
    ConteudoPostComponent,
    HomeComponent,
    SideMenuComponent,
    BlogAreaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
