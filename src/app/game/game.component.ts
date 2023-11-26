import { Component, Input } from '@angular/core';

import { PopulationServiceService } from '../services/population-service.service';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input({ required: true })
  started: boolean;

  constructor(public populationService: PopulationServiceService,
    public gameService: GameServiceService
  ) {
    this.started = this.gameService.isStarted();
  }

  ngOnInit(): void {
    this.populationService.getInitialElements();
  }
}
