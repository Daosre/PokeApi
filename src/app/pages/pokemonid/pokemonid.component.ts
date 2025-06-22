import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../../../Utils/interface';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-pokemonid',
  imports: [CommonModule, MatIconModule],
  templateUrl: './pokemonid.component.html',
  styleUrl: './pokemonid.component.css',
})
export class PokemonidComponent implements OnInit {
  #location = inject(Location);
  readonly #route = inject(ActivatedRoute);
  #pokemonService = inject(PokemonService);
  pokemonDetail$!: Observable<PokemonDetail>;
  pokemon!: PokemonDetail;
  getLog() {
    this.#pokemonService
      .getPokemonDetail('1')
      .subscribe((data) => (this.pokemon = data));
  }
  ngOnInit(): void {
    this.pokemonDetail$ = this.#pokemonService.getPokemonDetail(
      this.#route.snapshot.paramMap.get('id')
    );
  }
  returnToTheFuture() {
    this.#location.back();
  }
}
