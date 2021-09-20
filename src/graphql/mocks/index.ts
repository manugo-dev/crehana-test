import { GET_ALL_COUNTRIES } from 'graphql/queries/getAllCountries';
import { GET_COUNTRY } from 'graphql/queries/getCountry';
import { GET_ALL_FILTERS } from 'graphql/queries/getFilters';

export default [
  {
    request: {
      query: GET_ALL_COUNTRIES,
      variables: { search: '', continent: '', currency: '' }
    },
    result: {
      data: {
        countries: [
          { code: 'AD', name: 'Andorra', currency: 'EUR', __typename: 'Country' },
          { code: 'AE', name: 'United Arab Emirates', currency: 'AED', __typename: 'Country' },
          { code: 'AF', name: 'Afghanistan', currency: 'AFN', __typename: 'Country' },
          { code: 'AG', name: 'Antigua and Barbuda', currency: 'XCD', __typename: 'Country' },
          { code: 'AI', name: 'Anguilla', currency: 'XCD', __typename: 'Country' },
          { code: 'AL', name: 'Albania', currency: 'ALL', __typename: 'Country' },
          { code: 'AM', name: 'Armenia', currency: 'AMD', __typename: 'Country' },
          { code: 'AO', name: 'Angola', currency: 'AOA', __typename: 'Country' },
          { code: 'AQ', name: 'Antarctica', currency: null, __typename: 'Country' },
          { code: 'AR', name: 'Argentina', currency: 'ARS', __typename: 'Country' },
          { code: 'AS', name: 'American Samoa', currency: 'USD', __typename: 'Country' },
          { code: 'AT', name: 'Austria', currency: 'EUR', __typename: 'Country' },
          { code: 'AU', name: 'Australia', currency: 'AUD', __typename: 'Country' },
          { code: 'AW', name: 'Aruba', currency: 'AWG', __typename: 'Country' },
          { code: 'AX', name: 'Åland', currency: 'EUR', __typename: 'Country' },
          { code: 'AZ', name: 'Azerbaijan', currency: 'AZN', __typename: 'Country' },
          { code: 'BA', name: 'Bosnia and Herzegovina', currency: 'BAM', __typename: 'Country' },
          { code: 'BB', name: 'Barbados', currency: 'BBD', __typename: 'Country' },
          { code: 'BD', name: 'Bangladesh', currency: 'BDT', __typename: 'Country' },
          { code: 'BE', name: 'Belgium', currency: 'EUR', __typename: 'Country' },
          { code: 'BF', name: 'Burkina Faso', currency: 'XOF', __typename: 'Country' },
          { code: 'BG', name: 'Bulgaria', currency: 'BGN', __typename: 'Country' },
          { code: 'BH', name: 'Bahrain', currency: 'BHD', __typename: 'Country' },
          { code: 'BI', name: 'Burundi', currency: 'BIF', __typename: 'Country' },
          { code: 'BJ', name: 'Benin', currency: 'XOF', __typename: 'Country' },
          { code: 'BL', name: 'Saint Barthélemy', currency: 'EUR', __typename: 'Country' },
          { code: 'BM', name: 'Bermuda', currency: 'BMD', __typename: 'Country' },
          { code: 'BN', name: 'Brunei', currency: 'BND', __typename: 'Country' },
          { code: 'BO', name: 'Bolivia', currency: 'BOB,BOV', __typename: 'Country' }
        ]
      }
    }
  },
  {
    request: {
      query: GET_ALL_FILTERS,
      variables: {}
    },
    result: {
      data: {
        continents: [
          { code: 'AF', name: 'Africa', __typename: 'Continent' },
          { code: 'AN', name: 'Antarctica', __typename: 'Continent' },
          { code: 'AS', name: 'Asia', __typename: 'Continent' },
          { code: 'EU', name: 'Europe', __typename: 'Continent' },
          { code: 'NA', name: 'North America', __typename: 'Continent' },
          { code: 'OC', name: 'Oceania', __typename: 'Continent' },
          { code: 'SA', name: 'South America', __typename: 'Continent' }
        ]
      }
    }
  },
  {
    request: {
      query: GET_ALL_COUNTRIES,
      variables: { search: 'CO', continent: '', currency: '' }
    },
    result: {
      data: {
        countries: [{ code: 'CO', name: 'Colombia', currency: 'COP', __typename: 'Country' }]
      }
    }
  },
  {
    request: {
      query: GET_COUNTRY,
      variables: { code: 'CO' }
    },
    result: {
      data: {
        countries: [
          {
            code: 'CO',
            name: 'Colombia',
            currency: 'COP',
            continent: { name: 'South America', code: 'SA', __typename: 'Continent' },
            languages: [{ name: 'Spanish', code: 'es', __typename: 'Language' }],
            capital: 'Bogotá',
            __typename: 'Country'
          }
        ]
      }
    }
  }
];
