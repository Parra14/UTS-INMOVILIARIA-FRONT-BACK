import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOficinaComponent } from './create-oficina.component';

describe('CreateOficinaComponent', () => {
  let component: CreateOficinaComponent;
  let fixture: ComponentFixture<CreateOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOficinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
