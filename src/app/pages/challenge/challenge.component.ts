import { Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { PopupService } from '../../shared/popup.service';

interface Post {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  pinned: boolean;
  reactions: number;
  comments: number;
  steps?: string[];
}

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent {
  popupService = inject(PopupService);
  countdown = '20h 44m';
  participantCount = '85+';

  isCheckedIn = computed(() =>
    this.popupService.completedDays().has(this.popupService.activeDay())
  );

  openCheckin(): void {
    this.popupService.openCheckin();
  }

  posts: Post[] = [
    {
      id: 1,
      author: 'Russell Brunson',
      avatar: 'assets/images/avatar/1.png',
      timeAgo: '3 hrs ago',
      content: 'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
      pinned: true,
      reactions: 18,
      comments: 10,
      steps: [
        '1️⃣ Minimum 20 minutes of sit-up',
        '2️⃣ Mention Intensity',
        '3️⃣ Upload Media (Optional)',
        '4️⃣ Upload Media (Optional)',
        '5️⃣ Upload Media (Optional)'
      ]
    },
    {
      id: 2,
      author: 'Sayantan Chandra',
      avatar: 'assets/images/avatar/2.png',
      timeAgo: '1 hrs ago',
      content: 'Completed today\'s challenge workout, one step closer to my goal.',
      pinned: false,
      reactions: 18,
      comments: 10,
      steps: []
    },
    {
      id: 3,
      author: 'Pappu Saha',
      avatar: 'assets/images/avatar/3.png',
      timeAgo: '2 days ago',
      content: 'Today\'s challenge workout completed—feeling stronger already.',
      pinned: false,
      reactions: 12,
      comments: 5,
      steps: []
    }
  ];
}
