import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { SectionComponent } from './section/section';
import { Skills } from './components/skills/skills';

export interface NavItem {
  name: string;
  href: string;
}

export interface Stat {
  value: number;
  label: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface Formation {
  title: string;
  school: string;
  year: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
  flag: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SectionComponent, Skills],
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

  // Statistiques
  stats: Stat[] = [
    { value: 3, label: "Années d'expérience", icon: '📅' },
    { value: 15, label: 'Projets livrés', icon: '🚀' },
    { value: 12, label: 'Clients satisfaits', icon: '⭐' },
    { value: 8, label: 'Technologies maîtrisées', icon: '💻' },
  ];

  // Expériences
  experiences: Experience[] = [
    {
      title: 'Ingénieur DevOps',
      company: 'Sybernetys · Contrat CIVP',
      date: "Mars 2025 - Aujourd'hui",
      technologies: ['Docker', 'Kubernetes', 'Traefik', 'OVH'],
      description: [
        'Déploiement et gestion de microservices sur VPS avec Docker, Docker Compose et Traefik.',
        "Supervision et coordination de l'équipe pour assurer qualité et respect des délais.",
        'Configuration DNS et liaison de domaines sur OVH.',
        'Optimisation et automatisation des pipelines de déploiement.',
      ],
    },
    {
      title: 'Développeuse Web',
      company: 'Sybernetys · Contrat CIVP',
      date: 'Janvier 2024 - Février 2025',
      technologies: ['Next.js', 'Node.js', 'JWT', 'Hostinger'],
      description: [
        'Développement de sites et applications Next.js avec backend Node.js.',
        "Conception d'API sécurisées avec JWT et réalisation de tests unitaires.",
        'Déploiement de sites statiques sur Hostinger avec optimisation SEO.',
        'Création de sites responsive pour une expérience utilisateur optimale.',
      ],
    },
    {
      title: 'Développeur Full Stack Freelance',
      company: 'Karriery',
      date: 'Janvier - Décembre 2023',
      technologies: ['React', 'Angular', 'Ionic', 'React Native'],
      description: [
        "Création et maintenance d'interfaces web interactives avec React, Angular, HTML et CSS.",
        "Développement d'applications mobiles avec Ionic et React Native.",
        "Mise en place d'expériences utilisateur optimisées et responsive design.",
        "Supervision et coordination de l'équipe pour assurer qualité et respect des délais.",
      ],
    },
  ];

  // Formations
  formations: Formation[] = [
    {
      title: "Diplôme d'ingénieur en génie informatique",
      school: 'iTeam University',
      year: '2024/2025',
      description: 'Spécialité : Cloud Computing et Virtualisation',
    },
    {
      title: 'Licence en génie électrique',
      school: 'ISET Siliana',
      year: '2021/2022',
      description: 'Spécialité : Automatisme et informatique industrielle',
    },
    {
      title: 'Baccalauréat',
      school: 'Lycée Beb El Khadra',
      year: '2017/2018',
      description: 'Spécialité : technique',
    },
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

  // Langues
  languages: Language[] = [
    { name: 'Arabe', level: 'Langue maternelle', flag: '🇹🇳' },
    { name: 'Français', level: 'Niveau B2', flag: '🇫🇷' },
    { name: 'Anglais', level: 'Niveau B1', flag: '🇬🇧' },
    { name: 'Allemand', level: 'Niveau A1', flag: '🇩🇪' },
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
