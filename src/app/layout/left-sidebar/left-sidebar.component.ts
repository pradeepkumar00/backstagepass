import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { PopupService } from '../../shared/popup.service';

interface SidebarDay {
  day: number;
  label: string;
  locked: boolean;
  pending: boolean;
  mobileLabel: string;
}

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  popupService = inject(PopupService);

  days: SidebarDay[] = Array.from({ length: 9 }, (_, i) => ({
    day: i + 1,
    label: `Day - ${i + 1}`,
    locked: i > 0,
    pending: true,
    mobileLabel: `Day ${i + 1}`
  }));

  selectDay(day: SidebarDay): void {
    if (!day.locked) {
      this.popupService.activeDay.set(day.day);
    }
  }

  isDayCompleted(day: number): boolean {
    return this.popupService.completedDays().has(day);
  }
}
