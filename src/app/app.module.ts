import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { ComparedElementComponent } from './compared-element/compared-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ComparedElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
