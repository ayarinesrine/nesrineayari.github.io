import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section';

export interface Language {
  name: string;
  level: string;
  flag: string;
}

@Component({
  selector: 'app-languages',
  imports: [SectionComponent, CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  languages: Language[] = [
    { name: 'Arabe', level: 'Langue maternelle', flag: '🇹🇳' },
    { name: 'Français', level: 'Niveau B2', flag: '🇫🇷' },
    { name: 'Anglais', level: 'Niveau B1', flag: '🇬🇧' },
    { name: 'Allemand', level: 'Niveau A1', flag: '🇩🇪' },
  ];
}
