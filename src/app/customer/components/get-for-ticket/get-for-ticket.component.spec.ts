import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetForTicketComponent } from './get-for-ticket.component';

describe('GetForTicketComponent', () => {
  let component: GetForTicketComponent;
  let fixture: ComponentFixture<GetForTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetForTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetForTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
