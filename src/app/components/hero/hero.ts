import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Stat {
  value: number;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  
  isMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {}
  stats: Stat[] = [
    { value: 3, label: "Années d'expérience", icon: '📅' },
    { value: 15, label: 'Projets livrés', icon: '🚀' },
    { value: 12, label: 'Clients satisfaits', icon: '⭐' },
    { value: 8, label: 'Technologies maîtrisées', icon: '💻' },
  ];

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
}
