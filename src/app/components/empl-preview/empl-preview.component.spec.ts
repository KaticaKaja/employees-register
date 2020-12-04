import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplPreviewComponent } from './empl-preview.component';

describe('EmplPreviewComponent', () => {
  let component: EmplPreviewComponent;
  let fixture: ComponentFixture<EmplPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
