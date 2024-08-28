import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssignedToMeComponent } from './employee-assigned-to-me.component';

describe('EmployeeAssignedToMeComponent', () => {
  let component: EmployeeAssignedToMeComponent;
  let fixture: ComponentFixture<EmployeeAssignedToMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAssignedToMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAssignedToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
