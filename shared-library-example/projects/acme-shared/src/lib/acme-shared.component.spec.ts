import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeSharedComponent } from './acme-shared.component';

describe('AcmeSharedComponent', () => {
  let component: AcmeSharedComponent;
  let fixture: ComponentFixture<AcmeSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmeSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
