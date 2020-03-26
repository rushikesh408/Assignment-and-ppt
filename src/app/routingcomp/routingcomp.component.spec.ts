import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcompComponent } from './routingcomp.component';

describe('RoutingcompComponent', () => {
  let component: RoutingcompComponent;
  let fixture: ComponentFixture<RoutingcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
