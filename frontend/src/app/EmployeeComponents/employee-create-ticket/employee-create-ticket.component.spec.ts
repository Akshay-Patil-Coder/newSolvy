import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateTicketComponent } from './employee-create-ticket.component';

describe('EmployeeCreateTicketComponent', () => {
  let component: EmployeeCreateTicketComponent;
  let fixture: ComponentFixture<EmployeeCreateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreateTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
