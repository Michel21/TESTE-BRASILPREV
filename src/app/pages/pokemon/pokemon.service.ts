import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/model/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  isLaoding: boolean = false;
  constructor(
    private http: HttpClient,
  ) { }

  ListPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.apiUrl}/cards`)
      .pipe(
        tap((p) => this.isLaoding = true),
        catchError((e) => {
          this.isLaoding = false;
          return throwError(e);
        })
      );
  }
  ListPokemonId(id: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.apiUrl}/cards/${id}`)
      .pipe(
        tap((p) => this.isLaoding = true),
        catchError((e) => {
          this.isLaoding = false;
          return throwError(e);
        })
      );
  }
  ListPokemonName(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.apiUrl}/cards?name=${name}`)
      .pipe(
        tap((p) => this.isLaoding = true),
        catchError((e) => {
          this.isLaoding = false;
          return throwError(e);
        })
      );
  }

  isLoadingError(): Boolean {
    return this.isLaoding;
  }
}


