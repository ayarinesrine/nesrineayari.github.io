import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../section/section';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
