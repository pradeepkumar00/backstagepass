import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'backstage-theme';
  isDark = signal(false);

  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved === 'dark') {
      this.isDark.set(true);
      this.applyTheme(true);
    }
  }

  toggle(): void {
    const dark = !this.isDark();
    this.isDark.set(dark);
    this.applyTheme(dark);
    localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
  }

  private applyTheme(dark: boolean): void {
    document.body.classList.toggle('dark-theme', dark);
    document.body.classList.toggle('light-theme', !dark);
  }
}
