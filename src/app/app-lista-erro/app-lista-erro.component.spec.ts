import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListaErroComponent } from './app-lista-erro.component';

describe('AppListaErroComponent', () => {
  let component: AppListaErroComponent;
  let fixture: ComponentFixture<AppListaErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListaErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListaErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
