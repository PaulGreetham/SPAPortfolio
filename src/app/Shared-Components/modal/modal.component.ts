import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() display: boolean = false;
  @Input() title: string = '';
  @Output() closeEvent = new EventEmitter<void>();

  @ViewChild('modalDialog', { static: false }) modalDialog!: ElementRef;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    document.addEventListener('mousedown', this.onModalClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('mousedown', this.onModalClick.bind(this));
  }

  close() {
    this.display = false;
    this.closeEvent.emit();
  }

  onModalClick(event: MouseEvent) {
    if (this.display && this.modalDialog && !this.modalDialog.nativeElement.contains(event.target)) {
      this.close();
    }
  }
}
