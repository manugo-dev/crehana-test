import gql from 'graphql-tag';

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries($search: String!, $continent: String!, $currency: String!) {
    countries(
      filter: { code: { regex: $search }, continent: { regex: $continent }, currency: { regex: $currency } }
    ) {
      code
      name
      currency
    }
  }
`;
