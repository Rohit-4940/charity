import { Routes } from '@angular/router';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('../@portfolio-module/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../@portfolio-module/portfolio/home/home.component').then(
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
          import('./portfolio/project/project.component').then(
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
          import('./portfolio/contact-me/contact-me.component').then(
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
          import('./portfolio/event/event.component').then(
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
          import('./portfolio/about-me/about-me.component').then(
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
          import('./portfolio/donors/donors.component').then(
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
          import('./portfolio/donation/donation.component').then(
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
          import('./portfolio/work/works.component').then(
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
          import('./portfolio/blog-list/blog-list.component').then(
            (m) => m.BlogListComponent
          ),
        data: {
          title: 'Blogs',
          description: 'Read my blog posts on various topics',
        },
      },
      {
        path: 'post/:postId',
        loadComponent: () =>
          import('./portfolio/blog-list/blog-post/blog-post.component').then(
            (m) => m.BlogPostComponent
          ),
        data: {
          title: 'Blog Post',
          description: 'View details of a specific blog post',
        },
      },
    ],
  },
];
