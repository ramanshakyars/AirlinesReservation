import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionManageComponent } from './contact-section-manage.component';

describe('ContactSectionManageComponent', () => {
  let component: ContactSectionManageComponent;
  let fixture: ComponentFixture<ContactSectionManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSectionManageComponent]
    });
    fixture = TestBed.createComponent(ContactSectionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
