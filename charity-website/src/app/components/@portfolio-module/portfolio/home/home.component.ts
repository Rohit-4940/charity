import {Component, inject} from '@angular/core';
import {ProjectComponent} from '../project/project.component';
import {ContactMeComponent} from '../contact-me/contact-me.component';
import {WorksComponent} from '../work/works.component';
import {ChatWindowComponent} from '../chat-window/chat-window.component';
import {PersonalDetails} from '../../../../@core/data/personal-details';
import {ChatService} from '../../../../shared-service/chat.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [
    ProjectComponent,
    ContactMeComponent,
    WorksComponent,
    ChatWindowComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  personalDetails = PersonalDetails;

  chatService: ChatService = inject(ChatService);
  router: Router = inject(Router);

  openChat() {
    this.chatService.toggleChat();
  }

  openAbout() {
    this.router.navigate(['/portfolio/about']);
  }
}
