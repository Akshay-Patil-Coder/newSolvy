import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAllListComponent } from './employee-all-list.component';

describe('EmployeeAllListComponent', () => {
  let component: EmployeeAllListComponent;
  let fixture: ComponentFixture<EmployeeAllListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAllListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
