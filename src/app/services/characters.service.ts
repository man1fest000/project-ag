import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../configs";
import {ICharacter} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient:HttpClient) { }

  getById(id:number):Observable<ICharacter>{
    return this.httpClient.get<ICharacter>(`${urls.characters}/${id}`)
  }



}
