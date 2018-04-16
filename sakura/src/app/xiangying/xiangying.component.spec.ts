import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiangyingComponent } from './xiangying.component';

describe('XiangyingComponent', () => {
  let component: XiangyingComponent;
  let fixture: ComponentFixture<XiangyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiangyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiangyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
