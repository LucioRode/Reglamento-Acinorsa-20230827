import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListonsuperiorComponent } from './listonsuperior.component';

describe('ListonsuperiorComponent', () => {
  let component: ListonsuperiorComponent;
  let fixture: ComponentFixture<ListonsuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListonsuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListonsuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
