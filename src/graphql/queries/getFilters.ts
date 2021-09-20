import gql from 'graphql-tag';

export const GET_ALL_FILTERS = gql`
  query GetFilters {
    continents {
      code
      name
    }
  }
`;
