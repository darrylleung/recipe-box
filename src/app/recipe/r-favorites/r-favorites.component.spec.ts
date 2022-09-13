import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFavoritesComponent } from './r-favorites.component';

describe('RFavoritesComponent', () => {
  let component: RFavoritesComponent;
  let fixture: ComponentFixture<RFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
