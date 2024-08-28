import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreatedByMeComponent } from './employee-created-by-me.component';

describe('EmployeeCreatedByMeComponent', () => {
  let component: EmployeeCreatedByMeComponent;
  let fixture: ComponentFixture<EmployeeCreatedByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreatedByMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreatedByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
