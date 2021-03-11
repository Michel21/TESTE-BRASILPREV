import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from 'src/app/shared/model/pokemon';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';
import { _PATH } from 'src/app/shared/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  listPokemons: Pokemon[] = [];
  searchBarState = 'hidden'
  searchForm: FormGroup;
  searchControl: FormControl;
  loader;
  path = `${_PATH}/load.gif`

  constructor(
    private pokemonSrv: PokemonService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loader = this.pokemonSrv.isLoadingError();
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    type T = (r: Pokemon[]) => void;
    const listener: T = (res: any) => {
      this.order(res.cards);
      this.listPokemons = res.cards;
      this.loader = false;
    }

    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(searchTerm => this.pokemonSrv.ListPokemonName(searchTerm)
        .pipe(catchError(() => from<Pokemon[]>([]))))
    ).subscribe(listener)

    this.getAllPokemons();
  }

  order(items: any) {
    items.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  getAllPokemons() {
    this.loader = true;
    this.pokemonSrv.ListPokemon()
      .subscribe((res: any) => {
        this.order(res.cards)
        this.loader = false;
        this.listPokemons = res.cards;
      },
        err => this.loader = false,
      );
  }
  navigate(id: string){
    this.router.navigate([`cards/${id}`]);
  }
}
