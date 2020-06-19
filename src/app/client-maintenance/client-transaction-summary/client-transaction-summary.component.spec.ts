import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTransactionSummaryComponent } from './client-transaction-summary.component';

describe('ClientTransactionSummaryComponent', () => {
  let component: ClientTransactionSummaryComponent;
  let fixture: ComponentFixture<ClientTransactionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTransactionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
