import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerContainerComponent } from './inner-container.component';

describe('InnerContainerComponent', () => {
  let component: InnerContainerComponent;
  let fixture: ComponentFixture<InnerContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerContainerComponent]
    });
    fixture = TestBed.createComponent(InnerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
