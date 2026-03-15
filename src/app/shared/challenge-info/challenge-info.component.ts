import { Component, output } from '@angular/core';

@Component({
  selector: 'app-challenge-info',
  standalone: true,
  templateUrl: './challenge-info.component.html',
  styleUrl: './challenge-info.component.scss'
})
export class ChallengeInfoComponent {
  close = output<void>();

  onClose(): void {
    this.close.emit();
  }

  onJoin(): void {
    this.close.emit();
  }
}
