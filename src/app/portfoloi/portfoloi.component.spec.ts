import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoloiComponent } from './portfoloi.component';

describe('PortfoloiComponent', () => {
  let component: PortfoloiComponent;
  let fixture: ComponentFixture<PortfoloiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoloiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfoloiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
