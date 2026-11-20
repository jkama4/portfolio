import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Education } from './education';

describe('Education', () => {
  let fixture: ComponentFixture<Education>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Education],
    }).compileComponents();

    fixture = TestBed.createComponent(Education);
    fixture.detectChanges();
  });

  it('should list the MSc Data Science first', () => {
    const first = (fixture.nativeElement as HTMLElement).querySelector('.card h3');
    expect(first?.textContent).toContain('MSc Data Science');
  });
});
