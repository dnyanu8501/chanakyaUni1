import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeShapeComponent } from './change-shape.component';

describe('ChangeShapeComponent', () => {
  let component: ChangeShapeComponent;
  let fixture: ComponentFixture<ChangeShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeShapeComponent]
    });
    fixture = TestBed.createComponent(ChangeShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
