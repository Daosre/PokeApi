export interface PokemonHome {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetail {
  abilities: {
    ability: {
      name: string;
    };
  };
  forms: [{ name: string }];
  id: number;
  sprites: { front_default: string };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  weight: number;
}

export interface PokemonList {
  name: string;
  url:string;
}
