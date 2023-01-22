import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggerComponent } from './tagger.component';

describe('TaggerComponent', () => {
  let component: TaggerComponent;
  let fixture: ComponentFixture<TaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
