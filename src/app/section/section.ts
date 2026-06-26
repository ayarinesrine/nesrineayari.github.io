// src/app/section/section.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="{{ id }}" class="py-16 md:py-20 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            <span class="gradient-text">{{ title }}</span>
          </h2>
          <div
            class="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"
          ></div>
        </div>
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class SectionComponent {
  @Input() id!: string;
  @Input() title!: string;
}
