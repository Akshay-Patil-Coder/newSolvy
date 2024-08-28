import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMyticketsComponent } from './employee-mytickets.component';

describe('EmployeeMyticketsComponent', () => {
  let component: EmployeeMyticketsComponent;
  let fixture: ComponentFixture<EmployeeMyticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeMyticketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMyticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
