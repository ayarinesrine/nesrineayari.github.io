// pages/project-detail/project-detail.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectService, IProject } from '../../services/project';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  project: IProject | null = null;
  isLoading: boolean = true;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      console.log("🔍 ID récupéré depuis l'URL :", id);

      // Récupérer le projet
      this.project = this.projectService.getProjectById(id) || null;
      console.log('📦 Projet trouvé :', this.project);

      // ⚠️ IMPORTANT: Mettre isLoading à false APRÈS avoir récupéré le projet
      this.isLoading = false;
      console.log('⏳ isLoading = false');
    });
  }

  // Méthode pour retourner à la page précédente
  goBack() {
    window.history.back();
  }

  // Méthode pour obtenir la couleur de la catégorie
  getCategoryColor(category: string): string {
    const colors = {
      academique: 'from-blue-500 to-cyan-500',
      'auto-formation': 'from-green-500 to-emerald-500',
      professionnel: 'from-purple-500 to-pink-500',
      freelance: 'from-orange-500 to-red-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  }

  // Méthode pour obtenir l'icône de la catégorie
  getCategoryIcon(category: string): string {
    const icons = {
      academique: '🎓',
      'auto-formation': '📚',
      professionnel: '💼',
      freelance: '🚀',
    };
    return icons[category as keyof typeof icons] || '📁';
  }

  // Navigation dans la galerie
  nextImage() {
    if (this.project?.screenshots && this.currentImageIndex < this.project.screenshots.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.project?.screenshots && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  // Ouvrir un lien externe
  openLink(url: string, event: Event) {
    event.stopPropagation();
    window.open(url, '_blank');
  }
}
