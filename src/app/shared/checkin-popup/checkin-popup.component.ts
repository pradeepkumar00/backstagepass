import { Component, inject, output } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-checkin-popup',
  standalone: true,
  templateUrl: './checkin-popup.component.html',
  styleUrl: './checkin-popup.component.scss'
})
export class CheckinPopupComponent {
  close = output<void>();
  checkinText = '';

  private popupService = inject(PopupService);

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.popupService.markDayCompleted(this.popupService.activeDay());
    this.close.emit();
  }
}
