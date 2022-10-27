import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherViewComponent } from './another-view.component';

describe('AnotherViewComponent', () => {
  let component: AnotherViewComponent;
  let fixture: ComponentFixture<AnotherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
