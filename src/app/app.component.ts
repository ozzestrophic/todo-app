import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item/item.component';
import { SharedService } from './shared.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';

  constructor(private service: SharedService) {}

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: any[] = [];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  refreshItems() {
    this.service.getItems().subscribe((res) => {
      this.allItems = res;
    });
  }

  ngOnInit() {
    this.refreshItems();
  }

  addItem(description: string) {
    let newItem = {
      id: uuidv4(),
      description,
      done: false,
    };
    this.service.addItem(newItem).then((res) => {
      console.log(res);
      this.refreshItems();
    });
  }
}
