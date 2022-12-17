import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }
  ngOnInit(): void {
  }

}
