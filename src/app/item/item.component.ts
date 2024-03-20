import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  editable = false;

  constructor(private service: SharedService) {}

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(id: string, description: string) {
    if (!description) return;
    this.editable = false;
    this.service.fireEditItem(id, description);
  }

  toggleDone(id: string, done: boolean) {
    this.service.fireToggleItem(id, done);
  }

  delete(id: string) {
    this.service.fireDeleteItem(id);
  }
}
