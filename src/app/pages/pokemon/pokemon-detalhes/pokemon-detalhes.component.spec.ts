import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { PokemonDetalhesComponent } from './pokemon-detalhes.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonDetalhesComponent', () => {
  let component: PokemonDetalhesComponent;
  let fixture: ComponentFixture<PokemonDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetalhesComponent, LoaderComponent],
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
    fixture = TestBed.createComponent(PokemonDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
