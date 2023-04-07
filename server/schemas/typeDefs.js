const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    barks: [Bark]
  }

  type Bark {
    _id: ID
    description: String!
    likes: Int
  }

  input BarkData {
    _id: ID
    description: String!
    likes: Int
  }

  input UserData {
    _id: ID
    userName: String!
    email: String!
    password: String!
    barks: [BarkData]
  }

  type postBark {
    success: Boolean
    bark: Bark
  }

  type userBark {
    success: Boolean
    user: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    bark(_id: ID): Bark
    barks: [Bark]
    users: [User]
    user: User
  }

  type Mutation {
    createUser(userName: String!, email: String!, password: String!): Auth
    createBark(bark: BarkData): postBark
    updateUser(userName: String, email: String, password: String): User
    deleteBark(userId: ID!, bark_id: ID): User
    deleteUser(userId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
