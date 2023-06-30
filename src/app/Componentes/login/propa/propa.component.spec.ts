import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropaComponent } from './propa.component';

describe('PropaComponent', () => {
  let component: PropaComponent;
  let fixture: ComponentFixture<PropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
