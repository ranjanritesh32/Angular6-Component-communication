import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-send-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  @Output() eventSendMessage: EventEmitter<string>;
  constructor() {
    this.eventSendMessage = new EventEmitter<string>();
  }

  ngOnInit() {}

  sendMessage() {
    this.eventSendMessage.emit("Message  sent from child to parent");
  }
}
