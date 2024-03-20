import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
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

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }

  delete(id: string) {
    this.service.deleteItem(id).then((res) => {
      console.log(res);
      // this.refreshItems();
    });
  }
}
