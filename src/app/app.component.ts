import { Component } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fall-market';

  filter: "all" | "available" | "unavailable" = "all";

  allItems = [
    { description: "Bat Ear", available: true, quantity: "3" },
    { description: "Potion of Sleep", available: true, quantity: "7" },
    { description: "Harienir Fur", available: false, quantity: "0" },
    { description: "Eye of Baluk", available: true, quantity: "1" },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "available" ? item.available : !item.available
    );
  }

  addItem(description: string, quantity: string) {
    this.allItems.unshift({
      description,
      available: true,
      quantity
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
