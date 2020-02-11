import { gql } from 'apollo-server';

const typeDefs = gql`
    scalar Date

    type Listing {
        description: String!
        id: ID!
        title: String!
    }

    type User {
        email: String!
        id: ID!
    }

    type UserSession {
        createdAt: Date!
        expiresAt: Date!
        id: ID!
        user: User!
    }

    type Mutation {
        createListing(description: String!, title: String!): Listing!
        createPoem(author: String!, body: String!, title: String!): Poem!
        createUser(email: String!, password: String!): User!
        createUserSession(email: String!, password: String!): UserSession!
        deleteUserSession(sessionId: ID!): Boolean!
    }

    type Poem {
        author: String!
        body: String!
        id: ID!
        title: String!
        userId: ID!
    }

    type Query {
        listings: [Listing!]!
        poems: [Poem!]!
        userSession(me: Boolean!): UserSession
    }
`;

export default typeDefs;
