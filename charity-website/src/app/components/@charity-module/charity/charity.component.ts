import {Component, inject, OnInit} from '@angular/core';
import {CharityHeaderComponent} from './charity-header/charity-header.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ScrollToTopComponent} from '../../scroll-up/scroll-to-top.component';
import {ViewportScroller} from '@angular/common';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {CharityFooterComponent} from './charity-footer/charity-footer.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {ChatService} from '../../../shared-service/chat.service';

@Component({
  selector: 'app-portfolio',
  imports: [
    CharityHeaderComponent,
    RouterOutlet,
    ScrollToTopComponent,
    CharityFooterComponent,
    ChatWindowComponent
  ],
  templateUrl: './charity.component.html',
  standalone: true,
  styleUrl: './charity.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate(
              '0.5s ease-in-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            animate(
              '0.3s ease-in-out',
              style({ opacity: 0, transform: 'translateY(-20px)' })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ]
})
export class CharityComponent implements OnInit{
  router: Router = inject(Router);
  viewportScroller: ViewportScroller = inject(ViewportScroller);
  chatService: ChatService = inject(ChatService);

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Scroll to top
      }
    });
  }
}
