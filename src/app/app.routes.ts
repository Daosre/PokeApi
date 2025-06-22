import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonidComponent } from './pages/pokemonid/pokemonid.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/detail/:id', component: PokemonidComponent },
];
