import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(name: string, stock: string, price: string, owner: string) {
    if (!name) return;
    this.editable = false;
    const s = parseInt(stock, 10);
    const p = parseInt(price, 10);
    const o = parseInt(owner, 10);
    this.item.name = name;
    this.item.price = p;
    this.item.stock = s;
    this.item.owner = o;
  }
}
