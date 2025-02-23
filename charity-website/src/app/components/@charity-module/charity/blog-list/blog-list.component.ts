import {Component, inject, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './blog-list.component.html',
  standalone: true,
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit{
  router: Router = inject(Router);

  ngOnInit(): void {

  }

}
