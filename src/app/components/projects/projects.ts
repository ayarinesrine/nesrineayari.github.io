import { Component } from '@angular/core';
import { SectionComponent } from '../../section/section';
import { CommonModule } from '@angular/common';
export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

@Component({
  selector: 'app-projects',
  imports: [SectionComponent, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
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
}
