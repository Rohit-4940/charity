import { Routes } from '@angular/router';

export const CharityRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./charity/charity.component').then(
        (m) => m.CharityComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./charity/home/home.component').then(
            (m) => m.HomeComponent
          ),
        data: {
          title: 'Home',
          description: 'Welcome to the Home page of my portfolio',
        },
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./charity/project/project.component').then(
            (m) => m.ProjectComponent
          ),
        data: {
          title: 'Projects',
          description: 'Explore my past and ongoing projects',
        },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./charity/contact-me/contact-me.component').then(
            (m) => m.ContactMeComponent
          ),
        data: {
          title: 'Contact Me',
          description: 'Get in touch with me for collaborations or inquiries',
        },
      },
      {
        path: 'event',
        loadComponent: () =>
          import('./charity/event/event.component').then(
            (m) => m.EventComponent
          ),
        data: {
          title: 'Event',
          description: 'View Our Latest Event',
        },
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./charity/about-me/about-me.component').then(
            (m) => m.AboutMeComponent
          ),
        data: {
          title: 'About Me',
          description: 'Learn more about me, my skills, and my background',
        },
      },
      {
        path: 'donor',
        loadComponent: () =>
          import('./charity/donors/donors.component').then(
            (m) => m.DonorsComponent
          ),
        data: {
          title: 'donor',
          description: 'Here is the name of Donors',
        },
      },
      {
        path: 'donation',
        loadComponent: () =>
          import('./charity/donation/donation.component').then(
            (m) => m.DonationComponent
          ),
        data: {
          title: 'Donation',
          description: 'Lets Donate Me',
        },
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./charity/work/works.component').then(
            (m) => m.WorksComponent
          ),
        data: {
          title: 'Skills',
          description: 'Discover my technical and professional skill set',
        },
      },
      {
        path: 'blogs',
        loadComponent: () =>
          import('./charity/blog-list/blog-list.component').then(
            (m) => m.BlogListComponent
          ),
        data: {
          title: 'Blogs',
          description: 'Read my blog posts on various topics',
        },
      },
    ],
  },
];
