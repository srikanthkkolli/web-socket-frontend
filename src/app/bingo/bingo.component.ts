import {Component} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrl: './bingo.component.css'
})
export class BingoComponent {
  message: string = '';
  receivedMessages: string[] = [];
  numberForm: FormGroup;

  constructor(private webSocketService: WebSocketService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
    this.numberForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })
    this.webSocketService.connect('ws://localhost:8080/mySock');
    this.snackBar.open('New WebSocket connection established', 'Close', {
      duration: 3000,
    });
    this.webSocketService.messages.subscribe((msg: string) => {
      this.receivedMessages.push(msg);
    });
  }

  startBingo(): void {
    this.receivedMessages = [];
    this.webSocketService.sendMessage(this.numberForm.get('number')?.value);
    this.message = '';
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
}
