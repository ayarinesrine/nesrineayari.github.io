import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Formation } from './components/formation/formation';
import { Experience } from './components/experience/experience';
import { Languages } from './components/languages/languages';
import { Clients } from './components/clients/clients';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

export interface NavItem {
  name: string;
  href: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Skills,
    Formation,
    Footer,
    Hero,
    Clients,
    Contact,
    About,
    Experience,
    Languages,
    Projects,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate(
          '0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate(
          '0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) rotate(5deg)' }),
        animate(
          '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'scale(1) rotate(0)' }),
        ),
      ]),
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate(
                '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                style({ opacity: 1, transform: 'translateY(0)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  // États
  isMenuOpen = false;
  activeSection = 'home';
  isScrolled = false;
  isDarkMode = true;

  // Navigation
  navItems: NavItem[] = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Formation', href: '#formation' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.observeSections();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize(): void {
    // Gestion responsive
  }

  scrollTo(sectionId: string): void {
    this.isMenuOpen = false;
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  private observeSections(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              if (sectionId) {
                const navItem = this.navItems.find((item) => item.href === '#' + sectionId);
                if (navItem) {
                  this.activeSection = navItem.name.toLowerCase();
                }
              }
            }
          });
        },
        { threshold: 0.3, rootMargin: '-50px 0px -50px 0px' },
      );

      this.navItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (element) {
          observer.observe(element);
        }
      });
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('light-mode');
  }
}

export default AppComponent;
