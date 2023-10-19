import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fall-market';

  filter: "all" | "available" | "unavailable" = "all";

  allItems: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.getItems().subscribe((data) => {
      this.allItems = data;
    });
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "available" ? item.available : !item.available
    );
  }

  addItem(name: string, stock: string, price: string, owner: string) {
    const s = parseInt(stock, 10);
    const p = parseInt(price, 10);
    const o = parseInt(owner, 10);

    const newItem= {
      name,
      price: p,
      stock: s,
      owner: o
    }
    console.log(newItem);

    this.itemService.addItem(newItem).subscribe((response) => {
      if (response.message) {
        this.allItems.push(newItem);
      } else {
        // Handle the error, e.g., display an error message to the user
      }
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
