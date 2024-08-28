import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTicketsComponent } from './deleted-tickets.component';

describe('DeletedTicketsComponent', () => {
  let component: DeletedTicketsComponent;
  let fixture: ComponentFixture<DeletedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletedTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
