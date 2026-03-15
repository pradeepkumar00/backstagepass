import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { SubHeaderComponent } from './layout/sub-header/sub-header.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { ChallengePopupComponent } from './shared/challenge-popup/challenge-popup.component';
import { CheckinPopupComponent } from './shared/checkin-popup/checkin-popup.component';
import { ChallengeInfoComponent } from './shared/challenge-info/challenge-info.component';
import { PopupService } from './shared/popup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent, SubHeaderComponent, LeftSidebarComponent, ChallengePopupComponent, CheckinPopupComponent, ChallengeInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  popupService = inject(PopupService);
}
