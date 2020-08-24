import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonDamager, ResistanceAndWeaknesse } from 'src/app/shared/model/pokemon';
import { ActivatedRoute } from '@angular/router';
import { _PATH } from "../../../shared/constants/constants";
@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.scss']
})
export class PokemonDetalhesComponent implements OnInit {
  loader;
  path = `${_PATH}/load.gif`
  listPokemon: Pokemon;
  attacks: PokemonDamager[] = [];
  resistances: ResistanceAndWeaknesse[] = [];
  weaknesses: ResistanceAndWeaknesse[] = [];

  constructor(
    private pokemonSrv: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    type T = (r: Pokemon[]) => void
    const listener: T = (poken: any) => {
      this.listPokemon = poken.card;
      this.attacks = poken.card.attacks;
      this.resistances = poken.card.resistances;
      this.weaknesses = poken.card.weaknesses;
      this.loader = false;
    }
    this.pokemonSrv.ListPokemonId(this.route.snapshot.params['id'])
      .subscribe(listener)
    this.loader = this.pokemonSrv.isLoadingError()
  }
  doSomethingOnError(event: any) {
    event.target.src = this.path;
  }
}
