import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donation',
  imports: [],
  templateUrl: './donation.component.html',
  standalone: true,
  styleUrl: './donation.component.scss'
})
export class DonationComponent implements OnInit{
  activeTab: string = 'money';

  openTab(tab: string): void {
    this.activeTab = tab;
  }

  ngOnInit(): void {
  }

}
