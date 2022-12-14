import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RInfoComponent } from './r-info.component';

describe('RInfoComponent', () => {
  let component: RInfoComponent;
  let fixture: ComponentFixture<RInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
