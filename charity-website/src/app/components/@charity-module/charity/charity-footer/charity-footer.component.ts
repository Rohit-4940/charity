import { Component } from '@angular/core';
import {PersonalDetails} from '../../../../@core/data/personal-details';

@Component({
  selector: 'app-portfolio-footer',
  imports: [],
  templateUrl: './charity-footer.component.html',
  standalone: true,
  styleUrl: './charity-footer.component.scss'
})
export class CharityFooterComponent {
  currentYear: number = new Date().getFullYear();

  personalDetails = PersonalDetails;
}
