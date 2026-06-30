// components/smokey-cursor/smokey-cursor.component.ts
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-smokey-cursor',
  standalone: true,
  template: `
    <div #cursorContainer class="cursor-container">
      <canvas #cursorCanvas></canvas>
    </div>
  `,
  styles: `
    .cursor-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    .cursor-container.hidden {
      display: none;
    }
  `,
})
export class SmokeyCursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cursorCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cursorContainer') containerRef!: ElementRef<HTMLDivElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId: number | null = null;
  private isBrowser = false;

  private mouseX = 0;
  private mouseY = 0;
  private particles: Particle[] = [];

  private particleCount = 40;
  private particleSize = 30;
  private fadeSpeed = 0.01;
  private currentColor = 'rgba(171, 103, 231)';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.initCanvas();
      this.setupListeners();
      this.createParticles();
      this.animate();
    }
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const container = this.containerRef.nativeElement;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    this.ctx = canvas.getContext('2d')!;
    this.ctx.globalCompositeOperation = 'source-over';
  }

  private setupListeners() {
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('touchmove', this.onTouchMove.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  private onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    if (touch) {
      this.mouseX = touch.clientX;
      this.mouseY = touch.clientY;
    }
  }

  private onResize() {
    const canvas = this.canvasRef.nativeElement;
    const container = this.containerRef.nativeElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }

  private createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(
        new Particle(
          this.mouseX || window.innerWidth / 2,
          this.mouseY || window.innerHeight / 2,
          this.particleSize,
        ),
      );
    }
  }

  private animate() {
    if (!this.isBrowser) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.updateParticles();
    this.drawParticles();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private updateParticles() {
    const mouseX = this.mouseX;
    const mouseY = this.mouseY;

    this.particles.forEach((particle) => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        const speed = Math.min(distance * 0.05, 10);
        particle.x += (dx / distance) * speed;
        particle.y += (dy / distance) * speed;
      }

      particle.x += (Math.random() - 0.5) * 1.5;
      particle.y += (Math.random() - 0.5) * 1.5;

      particle.size *= 1 - this.fadeSpeed;

      if (particle.size < 2) {
        particle.reset(
          mouseX || window.innerWidth / 2,
          mouseY || window.innerHeight / 2,
          this.particleSize,
        );
      }
    });
  }

  private drawParticles() {
    const ctx = this.ctx;

    this.particles.forEach((particle) => {
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size,
      );

      const alpha = particle.opacity;
      gradient.addColorStop(0, `rgb(171, 103, 231, ${alpha * 0.6})`);
      gradient.addColorStop(0.3, `rgb(171, 103, 231,  ${alpha * 0.4})`);
      gradient.addColorStop(0.7, `rgb(171, 103, 231,  ${alpha * 0.2})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
  }

  // ✅ Méthodes publiques
  public setColor(color: string) {
    this.currentColor = color; // ✅ Utilisation de currentColor
  }

  public setSize(size: number) {
    this.particleSize = size;
    this.createParticles();
  }

  public setCount(count: number) {
    this.particleCount = count;
    this.createParticles();
  }

  public toggle(active: boolean) {
    const container = this.containerRef?.nativeElement;
    if (container) {
      container.classList.toggle('hidden', !active);
    }
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;

  constructor(x: number, y: number, size: number) {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.opacity = 0;
    this.reset(x, y, size);
  }

  reset(x: number, y: number, size: number) {
    this.x = x + (Math.random() - 0.5) * 100;
    this.y = y + (Math.random() - 0.5) * 100;
    this.size = size * (0.3 + Math.random() * 0.7);
    this.opacity = 0.5 + Math.random() * 0.5;
  }
}
