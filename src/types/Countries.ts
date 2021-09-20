export interface Country {
  name: string;
  code: string;
  currency?: string;
  capital?: string;
  continent?: {
    name?: string;
    code?: string;
  };
  languages?: {
    name?: string;
    code?: string;
  }[];
}

export interface CountriesList {
  countries: Pick<Country, 'name' | 'code' | 'currency'>[];
}

export interface CountriesDetail {
  countries: Country[];
}
