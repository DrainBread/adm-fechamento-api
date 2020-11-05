import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInjecaoSqlComponent } from './app-injecao-sql.component';

describe('AppInjecaoSqlComponent', () => {
  let component: AppInjecaoSqlComponent;
  let fixture: ComponentFixture<AppInjecaoSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInjecaoSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInjecaoSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
