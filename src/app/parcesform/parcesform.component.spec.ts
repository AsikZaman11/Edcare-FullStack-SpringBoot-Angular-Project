import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcesformComponent } from './parcesform.component';

describe('ParcesformComponent', () => {
  let component: ParcesformComponent;
  let fixture: ComponentFixture<ParcesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
