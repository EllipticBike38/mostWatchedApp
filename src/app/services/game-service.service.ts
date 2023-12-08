import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  started = false;
  gameOver = false;
  score = 0;
  
  //myBest in the localStorage
  getBestScore() {
    return localStorage.getItem("myBest");
  }

  setBestScore() {
    if (this.score > Number(this.getBestScore())) {
      localStorage.setItem("myBest", this.score.toString());
      return true;
    }
    return false;
  }

  startGame() {
    this.score = 0;
    this.gameOver = false;
    this.started = true;
  }

  endGame() {
    this.started = false;
    this.gameOver = true;
    this.setBestScore();
  }

  stopGame() {
    this.started = false;
    this.gameOver = false;
  }

  isStarted() {
    return this.started;
  }

  isGameOver() {
    return this.gameOver;
  }
}
