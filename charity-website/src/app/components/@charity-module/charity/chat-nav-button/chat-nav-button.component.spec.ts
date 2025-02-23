import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNavButtonComponent } from './chat-nav-button.component';

describe('ChatNavButtonComponent', () => {
  let component: ChatNavButtonComponent;
  let fixture: ComponentFixture<ChatNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatNavButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
