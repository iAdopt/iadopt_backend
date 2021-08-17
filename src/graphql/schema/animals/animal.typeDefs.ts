import gql from 'graphql-tag';

const typeDefs = gql`
    type Query {
        animals: [Animal]
        animal(id: ID!): Animal
    }

    type Animal {
        id: ID!,
        name: String,
    }
`;

export default typeDefs;
