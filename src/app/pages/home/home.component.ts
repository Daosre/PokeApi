import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { PokemonList } from '../../../Utils/interface';
import { PokemonService } from '../../services/pokemon.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isFilter: boolean = false;
  //Initialisation de variable
  searchValue: string = '';
  listSearch: PokemonList[] = [];
  //Stocker la liste dans un tableau vide
  pokemonList: PokemonList[] = [];
  //Injection du service dans le composant
  #pokemonService = inject(PokemonService);
  //Initialisation de ma liste
  //$ est une convention pour préciser que c'est un observable
  pokemon$ = this.#pokemonService
    .getPokemon()
    .pipe(take(1))
    .subscribe((value) => {
      this.pokemonList = value.results;
      this.listSearch = value.results;
    });
  //Fonction qui récupère l'id da s l'url
  getPokemonId(url: string): string | null {
    return this.#pokemonService.getPokemonIdFromUrl(url);
  }

  //Récupère la value de mon input
  updateData(e: Event) {
    //as HTML... sert a préciser que cela serras toujours un InputElement
    this.searchValue = (e.target as HTMLInputElement).value;
  }
  searchByName() {
    //pokemonList = Liste de 50
    //ListSearch = cherche dans la liste de 50 donc pokemonList
    this.listSearch = this.pokemonList.filter((pokemon) =>
      pokemon.name.includes(this.searchValue)
    );
  }

  changeFilter() {
    //Change l'état en l'inverse de ce qu'il ais actuellement true / false => false / true
    this.isFilter = !this.isFilter;
    if (this.isFilter) {
      this.listSearch = this.listSearch.sort((a, z) =>
        a.name.localeCompare(z.name)
      );
    } else {
      this.listSearch = this.listSearch.sort((a, z) =>
        z.name.localeCompare(a.name)
      );
    }
  }
}
