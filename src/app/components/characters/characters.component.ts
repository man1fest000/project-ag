import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

import {CharactersService, EpisodeService} from "../../services";
import {ICharacter} from "../../interfaces";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              private episodeService: EpisodeService,
              private charactersService:CharactersService ) {
  }
  @Input()
  charactersIds: number[];
  characters: ICharacter[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episodeService.getById(id).subscribe((episode) => {
        this.charactersIds = episode.characters.map((character) => {
          return +character.substring(character.lastIndexOf('/') + 1);
        })
        this.charactersIds.forEach((characterId) => {
          this.charactersService.getById(characterId).subscribe((character) => {
            this.characters.push(character);
          })
        })
      })

    })

    }





}
