import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { environment } from 'src/environments/environment';

describe('serviçe pokemon', async () => {
  let httpMock: HttpTestingController;
  let service: PokemonService;
  const fakeBody: any = [
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
      series: "Diamond & Pearl",
      set: "Legends Awakened",
      setCode: "dp6",
      subtype: "Basic",
      supertype: "Pokémon",
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        PokemonService,
      ]
     });
     service = TestBed.get(PokemonService);
     httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

  it('the pokemon serviçe must be instantiated', () => {
    service = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  });

  it('should be returned all pokemons', fakeAsync(() => {
    service.ListPokemon().subscribe((resonse: any) => {
       expect(resonse.length).toBe(2);
       expect(resonse).toEqual(fakeBody);
    });
    
    const request = httpMock.expectOne(`${environment.apiUrl}/cards`);
    expect(request.request.method).toBe("GET");

    request.flush(fakeBody, {
      status: 200,
      statusText: 'Success'
    });
    tick();
  }));

  it("should throw error", fakeAsync(() => {
    let error: any;
    service.ListPokemon().subscribe(() => {}, e => {
      error = e.error;
    });
    let request = httpMock.expectOne(`${environment.apiUrl}/cards`);
    request.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
    expect(error.includes("Something went wrong")).toBeTruthy();
    tick();
  }));

  it('should be return pokemon by name', fakeAsync(() => {
      service.ListPokemonName("Vespiquen").subscribe((resonse: any) => {
        expect(resonse[0].name).toEqual('Vespiquen');
     });
   
    const request = httpMock.expectOne(`${environment.apiUrl}/cards?name=Vespiquen`);
    expect(request.request.method).toBe("GET");

    request.flush(fakeBody, {
      status: 200,
      statusText: 'Success'
    });
    tick();
  }));
  
  it('the pokemon must be returned by id', fakeAsync(() => {
    service.ListPokemonId("xy7-10").subscribe((resonse: any) => {
     expect(resonse[0].id).toEqual('xy7-10');
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/cards/xy7-10`);
    expect(request.request.method).toBe("GET");

    request.flush(fakeBody, {
      status: 200,
      statusText: 'Success'
    });
    tick();
  }));
});
