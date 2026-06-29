import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section';

export interface Formations {
  title: string;
  school: string;
  year: string;
  description?: string;
}

@Component({
  selector: 'app-formation',
  imports: [SectionComponent, CommonModule],
  templateUrl: './formation.html',
  styleUrl: './formation.scss',
})
export class Formation {
  // Formations
  formations: Formations[] = [
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
}
