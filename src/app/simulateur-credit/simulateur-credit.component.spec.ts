import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurCreditComponent } from './simulateur-credit.component';

describe('SimulateurCreditComponent', () => {
  let component: SimulateurCreditComponent;
  let fixture: ComponentFixture<SimulateurCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateurCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateurCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
