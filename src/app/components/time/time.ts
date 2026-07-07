import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  signal,
  effect,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.html',
  styleUrls: ['./time.scss'],
})
export class Time implements AfterViewInit, OnDestroy {
  @ViewChild('clock01') clock01!: ElementRef;

  private platformId = inject(PLATFORM_ID);

  private timeInterval: ReturnType<typeof setInterval> | null = null;
  private tiltInstance: any;

  // Signaux
  private hrRotation = signal(0);
  private mnRotation = signal(0);
  private scRotation = signal(0);

  private secRotation = signal(0);
  private minRotation = signal(0);
  private hourRotation = signal(0);

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      this.updateClockHands();
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.clock01) {
      this.tiltInstance = VanillaTilt.init(this.clock01.nativeElement, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }

    this.startClock();
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }

    if (this.tiltInstance?.destroy) {
      this.tiltInstance.destroy();
    }
  }

  private startClock(): void {
    // Première mise à jour immédiate
    this.updateTime();

    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime(): void {
    const now = new Date();

    const hh = now.getHours() * 30;
    const mm = now.getMinutes() * 6;
    const ss = now.getSeconds() * 6;

    this.hrRotation.set(hh + mm / 12);
    this.mnRotation.set(mm);
    this.scRotation.set(ss);

    this.hourRotation.set(hh + mm / 12);
    this.minRotation.set(mm);
    this.secRotation.set(ss);
  }

  private updateClockHands(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const hrElement = document.querySelector('#hr') as HTMLElement | null;
    const mnElement = document.querySelector('#mn') as HTMLElement | null;
    const scElement = document.querySelector('#sc') as HTMLElement | null;

    if (hrElement) {
      hrElement.style.transform = `rotateZ(${this.hrRotation()}deg)`;
    }

    if (mnElement) {
      mnElement.style.transform = `rotateZ(${this.mnRotation()}deg)`;
    }

    if (scElement) {
      scElement.style.transform = `rotateZ(${this.scRotation()}deg)`;
    }

    const secElement = document.querySelector('.sec-hand .sec') as HTMLElement | null;

    const minElement = document.querySelector('.min-hand .min') as HTMLElement | null;

    const hourElement = document.querySelector('.hour-hand .hr') as HTMLElement | null;

    if (secElement) {
      secElement.style.transform = `rotateZ(${this.secRotation()}deg)`;
    }

    if (minElement) {
      minElement.style.transform = `rotateZ(${this.minRotation()}deg)`;
    }

    if (hourElement) {
      hourElement.style.transform = `rotateZ(${this.hourRotation()}deg)`;
    }
  }
}
