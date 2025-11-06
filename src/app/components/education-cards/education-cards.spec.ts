import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCards } from './education-cards';

describe('EducationCards', () => {
  let component: EducationCards;
  let fixture: ComponentFixture<EducationCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
