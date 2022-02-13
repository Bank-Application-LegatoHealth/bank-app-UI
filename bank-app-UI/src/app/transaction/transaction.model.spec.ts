import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionModel } from './transaction.model';

describe('TransactionModel', () => {
  let component: TransactionModel;
  let fixture: ComponentFixture<TransactionModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
