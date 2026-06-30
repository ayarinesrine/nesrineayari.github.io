import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(true);

  toggleTheme() {
    this.isDarkMode.update((value) => !value);
  }
}
