import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { PokemonDetalhesComponent } from './pokemon-detalhes.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../pokemon.service';
import { of } from 'rxjs';

describe('Pokemon Detalhes Component', () => {
  let component: PokemonDetalhesComponent;
  let fixture: ComponentFixture<PokemonDetalhesComponent>;
  let service: PokemonService;
  const result: any = {
    "card": [
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
        attacks: {
          convertedEnergyCost: 1,
          cost: ["Colorless"],
          damage: "10",
          name: "Headbutt",
          text: "",
        },
        setCode: "xy7",
        subtype: "Stage 1",
        supertype: "Pokémon",      },
    ]
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetalhesComponent, LoaderComponent],
      providers:[PokemonService],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(PokemonService);
    fixture = TestBed.createComponent(PokemonDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must call ListPokemonId', () => {
    const spy = spyOn(service, 'ListPokemonId').and.returnValue(of(result));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
