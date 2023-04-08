import { gql } from '@apollo/client';
//Will need to work on this page. Not sure
export const QUERY_USERS = gql`
query Query {
  users {
    _id
    userName
    email
    barks {
      _id
      description
      likes
    }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query Query {
  user {
    _id
    userName
    email
    barks {
      _id
      description
      likes
    }
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


export const QUERY_BARKS = gql`
query Query {
  barks {
    _id
    description
    likes
  }
}
`;

export const QUERY_SINGLE_USER_BARK = gql`
query Query($id: ID) {
  bark(_id: $id) {
    _id
    description
    likes
  }
}
`;
