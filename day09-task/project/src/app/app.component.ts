import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'User';
  items: string[] = [];
  newItem: string = '';
  editedItems: string[] = [];

  addItem(item: string): void {
      this.items.push(item);
      this.newItem = '';
  }

  modifyItem(index: number, item: string): void {
      this.items[index] = item;
      this.editedItems[index] = '';
  }

  deleteItem(index: number, deleteCount: number) {
    this.items.splice(index, deleteCount);
  }
}
