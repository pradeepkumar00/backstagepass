import { Component, inject, input } from '@angular/core';
import { PopupService } from '../../shared/popup.service';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
  private popupService = inject(PopupService);
  currentDay = input(1);
  totalDays = input(9);
  challengeTitle = input('9-Day Fitness Challenge');

  openInfo(): void {
    this.popupService.openChallengeInfo();
  }
}
