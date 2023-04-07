import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

//Need to adjust these when get bark to work //TODO
export const ADD_BARK = gql`
  mutation createBark($profileId: ID!, $skill: String!) {
    createBark(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
//TODO
export const REMOVE_BARK = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
//TODO
export const REMOVE_USER = gql`
  mutation updateUser($skill: String!) {
    updateUser(skill: $skill) {

    }
  }
`;