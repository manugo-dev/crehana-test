import gql from 'graphql-tag';

export const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    countries(filter: { code: { eq: $code } }) {
      code
      name
      currency
      continent {
        name
        code
      }
      languages {
        name
        code
      }
      capital
    }
  }
`;
