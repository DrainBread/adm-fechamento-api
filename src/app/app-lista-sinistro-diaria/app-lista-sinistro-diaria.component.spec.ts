import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListaSinistroDiariaComponent } from './app-lista-sinistro-diaria.component';

describe('AppListaSinistroDiariaComponent', () => {
  let component: AppListaSinistroDiariaComponent;
  let fixture: ComponentFixture<AppListaSinistroDiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListaSinistroDiariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListaSinistroDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
