import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressTicketComponent } from './inprogress-ticket.component';

describe('InprogressTicketComponent', () => {
  let component: InprogressTicketComponent;
  let fixture: ComponentFixture<InprogressTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InprogressTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InprogressTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
