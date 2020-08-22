import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

describe('PokemonService', async () => {
  let httpTestingController: HttpTestingController;
  let service: PokemonService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        PokemonService,
      ]
    }));

  afterEach(() => {
    httpTestingController.verify();
  });

  httpTestingController = TestBed.get(HttpTestingController);
  service = TestBed.get(PokemonService);

  it('should be return all pokemon', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.ListPokemon()).toBeTruthy(200);

  });

  it('should be return all pokemon by name', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.ListPokemonName("pikach")).toBeTruthy(200);
  });

  it('should be return pokemon by id', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.ListPokemonId("pl2-103")).toBeTruthy(200);
  });

});
