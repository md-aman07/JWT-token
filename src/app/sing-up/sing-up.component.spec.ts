import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUPComponent } from './sing-up.component';

describe('SingUPComponent', () => {
  let component: SingUPComponent;
  let fixture: ComponentFixture<SingUPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingUPComponent]
    });
    fixture = TestBed.createComponent(SingUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
