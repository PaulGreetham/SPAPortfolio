import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule], // Make sure CommonModule is imported here
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() display: boolean = false;
  @Input() title: string = '';
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.display = false;
    this.closeEvent.emit();
  }
}
