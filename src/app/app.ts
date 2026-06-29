import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { SectionComponent } from './section/section';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';
import { Hero } from './components/hero/hero';
import { Formation } from './components/formation/formation';
import { Experience } from './components/experience/experience';
import { Languages } from './components/languages/languages';
export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SectionComponent, Skills, Formation, Hero, About, Experience, Languages],
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
  currentYear = new Date().getFullYear();
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

  // Projets
  projects: Project[] = [
    {
      title: 'Automatisation des déploiements Kubernetes',
      description:
        "Mise en place d'une stratégie GitOps pour l'automatisation des déploiements sur un cluster Kubernetes.",
      tags: ['Kubernetes', 'GitOps', 'CI/CD', 'ArgoCD'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Application Mobile Ionic - Karriery',
      description:
        "Conception et développement d'une application mobile de gestion de carrière avec Ionic.",
      tags: ['Ionic', 'React', 'Mobile', 'Capacitor'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'API Sécurisée avec JWT',
      description:
        "Création d'une API RESTful avec authentification JWT et tests unitaires complets.",
      tags: ['Node.js', 'JWT', 'API', 'Express'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Automatisation des e-mails OVH',
      description:
        "Développement d'un outil d'automatisation pour la gestion des e-mails sur l'infrastructure OVH.",
      tags: ['OVH', 'Python', 'API', 'SMTP'],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Déchargeur de batteries - SNCFT',
      description:
        "Projet de fin d'études sur l'automatisation d'un système de décharge de batteries.",
      tags: ['Automatisme', 'Industrie', 'SNCFT', 'PLC'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Site Vitrine Next.js',
      description:
        'Création de sites statiques optimisés SEO avec Next.js et déploiement sur Hostinger.',
      tags: ['Next.js', 'SEO', 'Hostinger', 'Tailwind'],
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  // Clients
  clients: string[] = [
    'Inchaate',
    'AB Pro',
    'Mes Murs',
    'Gex Bâtiment',
    'Enea Home',
    'Global Reno',
    'Agexis',
    'Wellton Consulting',
    'Finky Consulting',
    'Open Mur',
    'Structural Metal',
    'Mur Mur',
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
