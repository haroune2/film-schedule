import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmScheduleComponent } from './film-schedule.component';

describe('FilmScheduleComponent', () => {
  let component: FilmScheduleComponent;
  let fixture: ComponentFixture<FilmScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
