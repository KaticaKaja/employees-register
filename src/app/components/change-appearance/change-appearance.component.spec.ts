import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAppearanceComponent } from './change-appearance.component';

describe('ChangeAppearanceComponent', () => {
  let component: ChangeAppearanceComponent;
  let fixture: ComponentFixture<ChangeAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAppearanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
