import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output()
cardEvent=new EventEmitter<string>();
  proceed() {
    this.cardEvent.emit("success");
      }
      cancel() {
      this.cardEvent.emit("payment");
      }
}
