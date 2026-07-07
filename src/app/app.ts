// app.ts
import { Component, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme';
import { SmokeyCursorComponent } from './components/smokey-cursor/smokey-cursor';

export interface NavItem {
  name: string;
  href: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navigation, Footer, RouterOutlet, SmokeyCursorComponent],
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
export class AppComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
  activeSection = 'home';
  isScrolled = false;
  isDarkMode = true;
  cursorEnabled = true;

  @ViewChild('cursorRef') cursorComponent!: SmokeyCursorComponent;

  constructor(public theme: ThemeService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize(): void {}

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

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('light-mode');

    if (this.cursorComponent) {
      const color = this.isDarkMode ? 'rgba(120, 180, 255, 0.6)' : 'rgba(255, 100, 150, 0.6)';
      this.cursorComponent.setColor(color);
    }
  }
}

export default AppComponent;
