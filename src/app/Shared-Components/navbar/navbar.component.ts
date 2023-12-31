import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule]
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    if (this.router.url === `/${path}`) {
      window.location.reload();
    } else {
      this.router.navigate([path]);
    }
  }
}
