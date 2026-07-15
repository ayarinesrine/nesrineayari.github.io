// pages/project/project.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectService, IProject } from '../../services/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements OnInit {
  // Données
  projects: IProject[] = [];
  filteredProjects: IProject[] = [];
  technologies: string[] = [];

  // Filtres
  selectedCategories: string[] = [];
  selectedTechnologies: string[] = [];
  searchTerm: string = '';

  // Catégories disponibles
  categories = [
    { value: 'academique', label: '🎓 Académique' },
    { value: 'auto-formation', label: '📚 Auto-formation' },
    { value: 'professionnel', label: '💼 Professionnel' },
    { value: 'freelance', label: '🚀 Freelance' },
  ];

  // ⚠️ IMPORTANT: Mettre isLoading à false par défaut
  isLoading: boolean = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    // Chargement immédiat des données
    this.projects = this.projectService.getProjects();
    this.technologies = this.projectService.getTechnologies();
    this.filterProjects();

    // Pas de setTimeout, chargement instantané
    this.isLoading = false;
  }

  // Filtrer les projets
  filterProjects() {
    this.filteredProjects = this.projects.filter((project) => {
      const categoryMatch =
        this.selectedCategories.length === 0 || this.selectedCategories.includes(project.category);

      const techMatch =
        this.selectedTechnologies.length === 0 ||
        project.technologies.some((tech) => this.selectedTechnologies.includes(tech));

      const searchMatch =
        this.searchTerm === '' ||
        project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(this.searchTerm.toLowerCase()),
        );

      return categoryMatch && techMatch && searchMatch;
    });
  }

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
    this.filterProjects();
  }

  toggleTechnology(tech: string) {
    const index = this.selectedTechnologies.indexOf(tech);
    if (index === -1) {
      this.selectedTechnologies.push(tech);
    } else {
      this.selectedTechnologies.splice(index, 1);
    }
    this.filterProjects();
  }

  clearFilters() {
    this.selectedCategories = [];
    this.selectedTechnologies = [];
    this.searchTerm = '';
    this.filterProjects();
  }

  getCategoryColor(category: string): string {
    const colors = {
      academique: 'from-blue-500 to-cyan-500',
      'auto-formation': 'from-green-500 to-emerald-500',
      professionnel: 'from-purple-500 to-pink-500',
      freelance: 'from-orange-500 to-red-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      academique: '🎓',
      'auto-formation': '📚',
      professionnel: '💼',
      freelance: '🚀',
    };
    return icons[category as keyof typeof icons] || '📁';
  }

  getCategoryCount(category: string): number {
    return this.projects.filter((p) => p.category === category).length;
  }

  getTechnologyCount(tech: string): number {
    return this.projects.filter((p) => p.technologies.includes(tech)).length;
  }

  openLink(url: string, event: Event) {
    event.stopPropagation();
    window.open(url, '_blank');
  }
}
