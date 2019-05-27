import gql from 'graphql-tag';

export const USER_NAME_QUERY = gql`
  query UserNameQuery {
    user(id: "5cd7f0d68ec310afd9a2f7a5") {
      id
      name
    }
  }
`;
