import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section';
@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [SectionComponent, CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  clients: string[] = [
    'Inchaate',
    'AB Pro',
    'Mes Murs',
    'Gex Bâtiment',
    'Enea Home',
    'Global Reno',
    'Agexis',
    'Wellton Consulting',
    'Finky Consulting',
    'Open Mur',
    'Structural Metal',
    'Mur Mur',
  ];
}
