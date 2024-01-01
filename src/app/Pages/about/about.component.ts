import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    });
  }
}
