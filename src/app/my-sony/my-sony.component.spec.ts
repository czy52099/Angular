import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySonyComponent } from './my-sony.component';

describe('MySonyComponent', () => {
  let component: MySonyComponent;
  let fixture: ComponentFixture<MySonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
