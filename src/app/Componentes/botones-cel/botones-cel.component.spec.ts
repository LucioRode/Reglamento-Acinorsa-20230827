import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesCelComponent } from './botones-cel.component';

describe('BotonesCelComponent', () => {
  let component: BotonesCelComponent;
  let fixture: ComponentFixture<BotonesCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesCelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
