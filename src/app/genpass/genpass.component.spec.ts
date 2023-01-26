import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenpassComponent } from './genpass.component';

describe('GenpassComponent', () => {
  let component: GenpassComponent;
  let fixture: ComponentFixture<GenpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
