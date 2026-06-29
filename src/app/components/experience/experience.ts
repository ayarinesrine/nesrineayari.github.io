import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section';

export interface Experiences {
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-experience',
  imports: [SectionComponent, CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: Experiences[] = [
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
}
