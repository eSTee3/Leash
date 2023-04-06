const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bark {
    _id: ID
    description: String
    comment: [Comments]
    likes: INT
  }

  type Comments {
    _id: ID
    description: String
    likes: INT
  }

  type User {
    _id: ID
    userName: String
    email: String
    barks: [Bark]
  }

  type Query {
    categories: [Category]
    bark(category: ID, name: String): [BARK]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
