import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Navpill } from './navpill';

describe('Navpill', () => {
  let component: Navpill;
  let fixture: ComponentFixture<Navpill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navpill],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navpill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
