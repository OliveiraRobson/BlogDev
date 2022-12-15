import { Component, Input, NgModule, OnInit ,HostListener} from '@angular/core';




@Component({
  selector: 'app-lista-de-posts',
  templateUrl: './lista-de-posts.component.html',
  styleUrls: ['./lista-de-posts.component.css']
})




export class ListaDePostsComponent  {
 
  
  public Categories: Array<any> = [
    { Title: "Jiu mudou vidas", PublishedOn: false , Description :""},
    { Title: "Academia mudou vidas", PublishedOn: false , Description :""},
    { Title: "O poder do dinheiro", PublishedOn: false, Description :""},
    { Title: "O poder do dinheiro", PublishedOn: false, Description :""},
   

    // { title: "Strawberry", color: "Red" }
  ];
  
  public Post: Array<any> = [
    { id: 1, Title: "Yellow" },
    { id: 2, Title: "Red" },
    { id: 3, Title: "Green" },
    { id: 3, Title: "Red" }
  ];

  // callPost(){
      
  // };  

  
}
 
