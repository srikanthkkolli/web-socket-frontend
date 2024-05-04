import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BingoComponent} from './bingo/bingo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatChip} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    BingoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbar,
    MatChip
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
