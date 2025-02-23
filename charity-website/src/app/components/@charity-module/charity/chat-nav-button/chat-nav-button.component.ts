import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-nav-buttons',
  standalone: true,
  template: `
    <div class="nav-buttons-container">
      <button (click)="navigate('/home')" class="nav-button">
        🏠 Home
      </button>
      <button (click)="navigate('/about')" class="nav-button">
        ℹ️ About Us
      </button>
      <button (click)="navigate('/blogs')" class="nav-button">
        📝 Blogs
      </button>
      <button (click)="navigate('/event')" class="nav-button">
        📅 Events
      </button>
      <button (click)="navigate('/contact')" class="nav-button">
        📞 Contact
      </button>
      <button (click)="navigate('/donor')" class="nav-button">
        💝 Donors
      </button>
      <button (click)="navigate('/donation')" class="nav-button donate">
        🎁 Make a Donation
      </button>
    </div>
  `,
  styles: [`
    .nav-buttons-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 16px;
    }
    .nav-button {
      padding: 8px 16px;
      border: 1px solid #3CC78F;
      border-radius: 8px;
      background: white;
      color: #3CC78F;
      text-align: left;
      transition: all 0.3s;
      cursor: pointer;
    }
    .nav-button:hover {
      background: #f0fff7;
    }
    .nav-button.donate {
      background: #3CC78F;
      color: white;
    }
    .nav-button.donate:hover {
      background: #2bb67e;
    }
  `]
})
export class ChatNavButtonsComponent {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
