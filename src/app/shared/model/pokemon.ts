export interface Pokemon {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string
  imageUrlHiRes: string;
  types: [];
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: number;
  retreatCost: [],
  number: number;
  artist: string,
  rarity: string,
  series: string,
  setCode: string,
}

export interface PokemonDamager {
  convertedEnergyCost: number;
  damage: string;
  text: string;
  name: string;
  cost: [];
}
export interface ResistanceAndWeaknesse {
  type: string;
  value: string;
}
