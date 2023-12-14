import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // Correct from 'styleUrl' to 'styleUrls'
})
export class AboutComponent {
  menus = [
    { id: 1, title: 'Story', content: 'Content for dropdown 1', isOpen: false },
    { id: 2, title: 'Before', content: 'Content for dropdown 2', isOpen: false },
    { id: 3, title: 'Interests', content: 'Content for dropdown 3', isOpen: false }
  ];

  toggleDropdown(menuId: number): void {
    const menu = this.menus.find(m => m.id === menuId);
    if (menu) {
      menu.isOpen = !menu.isOpen;
    }
  }
}
