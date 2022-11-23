import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePostsComponent } from './lista-de-posts.component';

describe('ListaDePostsComponent', () => {
  let component: ListaDePostsComponent;
  let fixture: ComponentFixture<ListaDePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
