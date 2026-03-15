import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PopupService {
  showCheckin = signal(false);
  showChallengeInfo = signal(false);
  showChallengePopup = signal(true);
  activeDay = signal(1);
  completedDays = signal<Set<number>>(new Set());
  openCheckin(): void {
    this.showCheckin.set(true);
  }

  closeCheckin(): void {
    this.showCheckin.set(false);
  }

  openChallengeInfo(): void {
    this.showChallengeInfo.set(true);
  }

  closeChallengeInfo(): void {
    this.showChallengeInfo.set(false);
  }

  openChallengePopup(): void {
    this.showChallengePopup.set(true);
  }

  closeChallengePopup(): void {
    this.showChallengePopup.set(false);
  }

  markDayCompleted(day: number): void {
    const updated = new Set(this.completedDays());
    updated.add(day);
    this.completedDays.set(updated);
  }
}
