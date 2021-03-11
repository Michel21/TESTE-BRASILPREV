import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonComponent } from './pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonDetalhesComponent } from './pokemon-detalhes/pokemon-detalhes.component';

describe('The component Pokemon ', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let service: PokemonService;
  
  const result: any = {
      "cards": [
        {
          id: "xy7-10",
          name: "Vespiquen",
          nationalPokedexNumber: 416,
          artist: "kawayoo",
          evolvesFrom: "Combee",
          imageUrl: "https://images.pokemontcg.io/xy7/10.png",
          imageUrlHiRes: "https://images.pokemontcg.io/xy7/10_hires.png",
          rarity: "Uncommon",
          series: "XY",
          attacks: {},
          setCode: "xy7",
          subtype: "Stage 1",
          supertype: "Pokémon",
        },
        {
          id: "dp6-90",
          imageUrl: "https://images.pokemontcg.io/dp6/90.png",
          imageUrlHiRes: "https://images.pokemontcg.io/dp6/90_hires.png",
          name: "Cubone",
          number: "90",
          rarity: "Common",
          attacks: {},
          series: "Diamond & Pearl",
          set: "Legends Awakened",
          setCode: "dp6",
          subtype: "Basic",
          supertype: "Pokémon",
        }
      ]
    }

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonComponent, PokemonDetalhesComponent],
      providers: [
        PokemonService,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(PokemonService);

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must call ListPokemon', () => {
    const spy =  spyOn(service, 'ListPokemon').and.returnValue(of(result));
    component.getAllPokemons();
    expect(spy).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
