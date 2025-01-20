import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdParentComponent } from './std-parent.component';

describe('StdParentComponent', () => {
  let component: StdParentComponent;
  let fixture: ComponentFixture<StdParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
