import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdChildComponent } from './std-child.component';

describe('StdChildComponent', () => {
  let component: StdChildComponent;
  let fixture: ComponentFixture<StdChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
