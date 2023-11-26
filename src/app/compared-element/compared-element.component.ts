import { Component, Input } from '@angular/core';
import { City, PopulationServiceService } from '../services/population-service.service';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-compared-element',
  templateUrl: './compared-element.component.html',
  styleUrls: ['./compared-element.component.scss']
})
export class ComparedElementComponent {
  private _isQuestion: boolean = false;
  myCity?: City;
  placeholderValue = "";
  condition = false;
  nextButton = {
    text: "",
    iconText: ""
  }

  @Input()
  set isQuestion(value: any) {
    this._isQuestion = value !== null && value !== undefined;
  }

  get isQuestion(): boolean {
    return this._isQuestion;
  }

  constructor(
    public populationService: PopulationServiceService,
    public gameService: GameServiceService
  ) { }

  ngOnInit(): void {
    this.myCity = this.populationService.getCity(this.isQuestion ? 2 : 1);
  }
  onButtonClick(color: "green" | "red") {

    const city1Population = Number(this.populationService.city1.value);
    const city2Population = Number(this.populationService.city2.value);
    this.condition = color === "green" ? city1Population <= city2Population : city1Population >= city2Population;
    this.placeholderValue = this.myCity?.value.toString() || "";
    this.nextButton.text = this.condition ? "Next" : "Retry";
    this.nextButton.iconText = this.condition ? "play_arrow" : "loop";
    this.gameService.score += this.condition ? 1 : 0;
    if (!this.condition) {
      this.gameService.endGame();
    }


  }

  onNextButtonClick() {
    if (this.condition) {
      this.populationService.nextQuestion();
    }
    else {
      this.populationService.getInitialElements();
      this.gameService.startGame();
    }
      this.placeholderValue = "";

  }
}
