import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section';

export interface Skill {
  name: string;
  icon: string;
  color: string;
  level?: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', icon: '🐳', color: '#2496ED', level: 90 },
        { name: 'Kubernetes', icon: '⚓', color: '#326CE5', level: 85 },
        { name: 'AWS', icon: '☁️', color: '#FF9900', level: 80 },
        { name: 'Terraform', icon: '🏗️', color: '#7B42BC', level: 75 },
        { name: 'GitLab CI/CD', icon: '🦊', color: '#FC6D26', level: 85 },
      ],
    },
    {
      category: 'Frontend & Mobile',
      icon: '⚛️',
      skills: [
        { name: 'React', icon: '⚛️', color: '#61DAFB', level: 90 },
        { name: 'Next.js', icon: '▲', color: '#000000', level: 85 },
        { name: 'Angular', icon: '🅰️', color: '#DD0031', level: 80 },
        { name: 'Ionic', icon: '📱', color: '#3880FF', level: 75 },
        { name: 'Tailwind', icon: '🎨', color: '#06B6D4', level: 90 },
      ],
    },
    {
      category: 'Backend & BDD',
      icon: '🗄️',
      skills: [
        { name: 'Node.js', icon: '🟢', color: '#339933', level: 85 },
        { name: 'JavaScript', icon: '📜', color: '#F7DF1E', level: 90 },
        { name: 'TypeScript', icon: '📘', color: '#3178C6', level: 85 },
        { name: 'MongoDB', icon: '🍃', color: '#47A248', level: 80 },
        { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', level: 75 },
      ],
    },
  ];

  ngOnInit(): void {
    // Initialisation
  }
  getSkillLevel(level: number): string {
    const levels = ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'];
    if (level >= 90) return levels[3];
    if (level >= 70) return levels[2];
    if (level >= 40) return levels[1];
    return levels[0];
  }
}
