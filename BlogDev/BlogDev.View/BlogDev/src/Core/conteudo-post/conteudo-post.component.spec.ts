import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoPostComponent } from './conteudo-post.component';

describe('ConteudoPostComponent', () => {
  let component: ConteudoPostComponent;
  let fixture: ComponentFixture<ConteudoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
