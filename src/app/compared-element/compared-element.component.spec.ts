import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedElementComponent } from './compared-element.component';

describe('ComparedElementComponent', () => {
  let component: ComparedElementComponent;
  let fixture: ComponentFixture<ComparedElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparedElementComponent]
    });
    fixture = TestBed.createComponent(ComparedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
