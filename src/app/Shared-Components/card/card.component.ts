import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() content: any; // Adjust the type as per your content structure
  @Input() cardId: string | undefined;
  @Input() animationDelayClass: string | undefined;
}
