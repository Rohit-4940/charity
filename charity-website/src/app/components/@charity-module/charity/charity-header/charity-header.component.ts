import {Component, HostListener, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-portfolio-header',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './charity-header.component.html',
  standalone: true,
  styleUrl: './charity-header.component.scss'
})
export class CharityHeaderComponent {
  isScrolled = false;

  router: Router = inject(Router);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
