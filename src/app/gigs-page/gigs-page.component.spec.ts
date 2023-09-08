import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsPageComponent } from './gigs-page.component';

describe('GigsPageComponent', () => {
  let component: GigsPageComponent;
  let fixture: ComponentFixture<GigsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
