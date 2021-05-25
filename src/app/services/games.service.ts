import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  APIkey="870d675c17a4470d8a121526933275dc";

  constructor(private http: HttpClient) { }

  async getGames() {
    const url= `https://api.rawg.io/api/games?key=` + this.APIkey;
    const urlGames= await fetch(url);
    const results = await urlGames.json();
     return {results}
  }

  async getGameById( id: number){
    const url = `https://api.rawg.io/api/games/${id}?key=`+ this.APIkey;
    const urlGames= await fetch(url);
    const results= await urlGames.json();
     return {results}
  }
}
