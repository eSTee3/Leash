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
    userName: String!
    description: String!
    likes: Int
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
    me: User
  }

  type Mutation {
    createUser(userName: String!, email: String!, password: String!): Auth
    createBark(description: String!): Bark
    updateUser(userName: String, email: String, password: String): User
    deleteBark(userId: ID!, barkId: ID!): User
    deleteUser(userId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
