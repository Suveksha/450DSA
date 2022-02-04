import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpostsComponent } from './editposts.component';

describe('EditpostsComponent', () => {
  let component: EditpostsComponent;
  let fixture: ComponentFixture<EditpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
