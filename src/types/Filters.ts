export interface Filter {
  name: string;
  code: string;
}

export interface ContinentFilter {
  continents: Filter[];
}
