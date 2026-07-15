// services/project.service.ts
import { Injectable } from '@angular/core';

export interface IProject {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'academique' | 'auto-formation' | 'professionnel' | 'freelance';
  image: string;
  screenshots?: string[];
  demoUrl?: string;
  githubUrl?: string;
  year: number;
  client?: string;
  duration?: string;
  team?: string;
  challenges?: string[];
  features?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: IProject[] = [
    {
      id: 1,
      title: 'E-commerce Pro',
      description: 'Plateforme e-commerce complète avec paiement Stripe',
      longDescription:
        "Une solution e-commerce complète développée avec Angular et Node.js. Cette plateforme offre une expérience utilisateur fluide avec un panier d'achat en temps réel, un système de paiement sécurisé via Stripe, et un tableau de bord administrateur complet.",
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind', 'TypeScript'],
      category: 'professionnel',
      image: 'assets/projects/ecommerce.jpg',
      screenshots: [
        'assets/projects/ecommerce-1.jpg',
        'assets/projects/ecommerce-2.jpg',
        'assets/projects/ecommerce-3.jpg',
      ],
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/votre-projet/ecommerce',
      year: 2024,
      client: 'Startup Tech',
      duration: '6 mois',
      team: 'Équipe de 3 développeurs',
      challenges: [
        'Intégration du système de paiement Stripe',
        'Gestion des stocks en temps réel',
        'Optimisation des performances pour 10 000+ produits',
      ],
      features: [
        "Panier d'achat en temps réel",
        'Paiement sécurisé Stripe',
        'Tableau de bord administrateur',
        'Gestion des stocks automatisée',
      ],
    },
    {
      id: 2, // ✅ Assurez-vous que l'ID 2 existe
      title: 'Gestion Universitaire',
      description: 'Application de gestion des étudiants et des cours',
      longDescription:
        'Une application complète de gestion universitaire permettant aux administrateurs de gérer les étudiants, les cours, les notes et les emplois du temps. Le système offre également un espace étudiant pour consulter les résultats et les cours.',
      technologies: ['React', 'Firebase', 'Tailwind', 'TypeScript', 'Node.js'],
      category: 'academique',
      image: 'assets/projects/uni-management.jpg',
      screenshots: [
        'assets/projects/uni-1.jpg',
        'assets/projects/uni-2.jpg',
        'assets/projects/uni-3.jpg',
      ],
      githubUrl: 'https://github.com/votre-projet/uni-management',
      year: 2023,
      client: 'Université de Paris',
      duration: '4 mois',
      team: 'Projet académique individuel',
      challenges: [
        'Gestion des relations entre étudiants, cours et notes',
        "Système d'authentification sécurisé",
        'Génération automatique des emplois du temps',
      ],
      features: [
        'Gestion des étudiants',
        'Gestion des cours et des notes',
        'Emploi du temps interactif',
        'Espace étudiant personnalisé',
      ],
    },
    {
      id: 3,
      title: 'Portfolio Photographe',
      description: 'Site portfolio interactif avec animations',
      longDescription:
        'Un portfolio moderne pour photographe avec des animations fluides et une galerie interactive. Le site présente les travaux du photographe avec un système de filtrage par catégorie et une expérience immersive.',
      technologies: ['Vue.js', 'GSAP', 'Tailwind', 'Vite'],
      category: 'freelance',
      image: 'assets/projects/photography.jpg',
      screenshots: [
        'assets/projects/photo-1.jpg',
        'assets/projects/photo-2.jpg',
        'assets/projects/photo-3.jpg',
      ],
      demoUrl: 'https://photographer-portfolio.com',
      year: 2024,
      client: 'Photographe professionnel',
      duration: '3 mois',
      team: 'Freelance individuel',
      challenges: [
        "Création d'animations fluides avec GSAP",
        'Optimisation du chargement des images',
      ],
      features: [
        'Galerie interactive',
        'Filtrage par catégorie',
        'Animations fluides',
        'Mode sombre/clair',
      ],
    },
    // Ajoutez vos 67 autres projets ici...
  ];

  getProjects(): IProject[] {
    console.log('📦 Tous les projets :', this.projects);
    return this.projects;
  }

  getProjectById(id: number): IProject | undefined {
    console.log('🔍 Recherche du projet avec ID :', id);
    console.log(
      '📋 Projets disponibles :',
      this.projects.map((p) => p.id),
    );
    const project = this.projects.find((p) => p.id === id);
    console.log('✅ Projet trouvé :', project);
    return project;
  }

  getTechnologies(): string[] {
    const techSet = new Set<string>();
    this.projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }
}
