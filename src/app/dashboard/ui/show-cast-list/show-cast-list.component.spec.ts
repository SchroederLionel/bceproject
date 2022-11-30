import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCastListComponent } from './show-cast-list.component';

describe('ShowCastListComponent', () => {
  let component: ShowCastListComponent;
  let fixture: ComponentFixture<ShowCastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCastListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
