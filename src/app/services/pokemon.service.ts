import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetail, PokemonHome } from '../../Utils/interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  #apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
  #apiPokemonDetail = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  //Récupération de la liste de pokemon
  getPokemon() {
    return this.http.get<PokemonHome>(this.#apiUrl);
  }
  //Récupération de l'id du pokemon
  getPokemonById(id: string) {
    const url = `${this.#apiPokemonDetail}${id}`;
    return this.http.get<PokemonDetail>(url);
  }

  //Récupération de l'id dans l'url du type de apiUrl
  getPokemonIdFromUrl(url: string) {
    return url.replace(this.#apiPokemonDetail, "").replace("/", "");

    //Ancienne version
    // const parts = url.split('/');
    // const filteredParts = parts.filter((part) => part !== '');
    // if (filteredParts.length > 0) {
    //   return filteredParts[filteredParts.length - 1];
    // }
    // return null;
  }

  //Récupération du detail du Pokemon
  getPokemonDetail(id: string | null) {
    return this.http.get<PokemonDetail>(this.#apiPokemonDetail + id);
  }

  //Recherche par nom
  getPokemonByName(name: string) {
    const url = `${this.#apiPokemonDetail}${name}`;
    return this.http.get<PokemonDetail>(url);
  }
}
