import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedDataComponent } from './verified-data.component';

describe('VerifiedDataComponent', () => {
  let component: VerifiedDataComponent;
  let fixture: ComponentFixture<VerifiedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
