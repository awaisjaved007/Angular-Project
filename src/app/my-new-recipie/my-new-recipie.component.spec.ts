import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewRecipieComponent } from './my-new-recipie.component';

describe('MyNewRecipieComponent', () => {
  let component: MyNewRecipieComponent;
  let fixture: ComponentFixture<MyNewRecipieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewRecipieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
