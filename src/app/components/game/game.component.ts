import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  constructor(private gamesService: GamesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const identifier =+ this.activatedRoute.snapshot.paramMap.get('id');
    this.gamesService.getGameById(identifier).then((data)=> {
      if (!data){
        return this.router.navigateByUrl('/')
      }
      this.game= data.results;
      this.game.developers= data.results.developers[0].name;
    });

  }

}
