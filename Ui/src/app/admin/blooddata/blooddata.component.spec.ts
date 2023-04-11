import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddataComponent } from './blooddata.component';

describe('BlooddataComponent', () => {
  let component: BlooddataComponent;
  let fixture: ComponentFixture<BlooddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlooddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
