import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCategoryUpdateComponent } from './parent-category-update.component';

describe('ParentCategoryUpdateComponent', () => {
  let component: ParentCategoryUpdateComponent;
  let fixture: ComponentFixture<ParentCategoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCategoryUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
