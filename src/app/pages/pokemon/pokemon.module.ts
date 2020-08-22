import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonDetalhesComponent } from './pokemon-detalhes/pokemon-detalhes.component';


const ROUTES: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'cards/:id', component: PokemonDetalhesComponent },
]

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetalhesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  bootstrap: [PokemonComponent]
})
export class PokemonModule { }
