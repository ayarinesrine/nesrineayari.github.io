import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeyCursor } from './smokey-cursor';

describe('SmokeyCursor', () => {
  let component: SmokeyCursor;
  let fixture: ComponentFixture<SmokeyCursor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmokeyCursor],
    }).compileComponents();

    fixture = TestBed.createComponent(SmokeyCursor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
