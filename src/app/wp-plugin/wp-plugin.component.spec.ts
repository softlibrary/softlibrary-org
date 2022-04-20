import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpPluginComponent } from './wp-plugin.component';

describe('WpPluginComponent', () => {
  let component: WpPluginComponent;
  let fixture: ComponentFixture<WpPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
