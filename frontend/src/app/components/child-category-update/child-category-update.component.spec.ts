import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCategoryUpdateComponent } from './child-category-update.component';

describe('ChildCategoryUpdateComponent', () => {
  let component: ChildCategoryUpdateComponent;
  let fixture: ComponentFixture<ChildCategoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCategoryUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
