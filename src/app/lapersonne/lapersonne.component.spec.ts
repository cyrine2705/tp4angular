import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapersonneComponent } from './lapersonne.component';

describe('LapersonneComponent', () => {
  let component: LapersonneComponent;
  let fixture: ComponentFixture<LapersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
