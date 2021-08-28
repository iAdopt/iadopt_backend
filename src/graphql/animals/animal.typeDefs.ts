import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
    animals: [Animal]
    animal(id: ID!): Animal
    specie(specie: Specie_enum): [Animal]
  }

  type Animal {
    id: ID!
    name: String,
    specie: Specie_enum,
  }

  enum Specie_enum{
        CAT
        DOG
  }
`;
export default typeDefs;
