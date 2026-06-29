import { Component } from '@angular/core';
import { SectionComponent } from '../../section/section';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
