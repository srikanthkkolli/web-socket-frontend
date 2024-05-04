import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public messages: Subject<string>;
  private websocket!: WebSocket;
  private messageQueue: string[] = [];

  constructor() {
    this.messages = new Subject<string>();
  }

  public connect(url: string): Subject<string> {
    this.websocket = new WebSocket(url);

    this.websocket.onopen = () => {
      console.log("WebSocket is now open.");
      this.messageQueue.forEach(msg => this.websocket.send(msg));
      this.messageQueue = []; // Clear the message queue
    };

    this.websocket.onmessage = (event) => {
      this.messages.next(event.data);
    };

    return this.messages;
  }

  public disconnect() {
    if (this.websocket) {
      this.websocket.close();
    }
  }

  public sendMessage(message: string) {
    if (this.websocket.readyState === WebSocket.OPEN) {
      console.log('Sending message:', message);
      this.websocket.send(message);
    } else {
      console.log('WebSocket is not open. Queuing message:', message);
      this.messageQueue.push(message);  // Queue the message to send when the socket opens
    }
  }
}
