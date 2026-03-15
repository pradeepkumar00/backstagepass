import { Component, output } from '@angular/core';

@Component({
  selector: 'app-challenge-popup',
  standalone: true,
  templateUrl: './challenge-popup.component.html',
  styleUrl: './challenge-popup.component.scss'
})
export class ChallengePopupComponent {
  close = output<void>();

  onClose(): void {
    this.close.emit();
  }
}
