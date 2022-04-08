import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCartComponent } from './games-cart.component';

describe('GamesCartComponent', () => {
  let component: GamesCartComponent;
  let fixture: ComponentFixture<GamesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
