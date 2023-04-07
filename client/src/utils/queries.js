import { gql } from '@apollo/client';
//Will need to work on this page. Not sure
export const QUERY_USERS = gql`
  query  {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
