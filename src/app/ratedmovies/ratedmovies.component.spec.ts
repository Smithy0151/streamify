import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedmoviesComponent } from './ratedmovies.component';

describe('RatedmoviesComponent', () => {
  let component: RatedmoviesComponent;
  let fixture: ComponentFixture<RatedmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatedmoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatedmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
