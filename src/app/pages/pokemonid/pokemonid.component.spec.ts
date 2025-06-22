import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonidComponent } from './pokemonid.component';

describe('PokemonidComponent', () => {
  let component: PokemonidComponent;
  let fixture: ComponentFixture<PokemonidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
