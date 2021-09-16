import gql from 'graphql-tag';

const typeDefs = gql`
    
    scalar Date

    type Query {
        animals: [Animal!]!
        animal(id: ID!): Animal
        species(species: Species_enum): [Animal]
        animalsFilter(
            species: Species_enum
            gender: Gender_enum
            status: Status_enum
            location: Int
        ): [Animal]        
    }

    type Animal {
        id: ID!
        name: String!
        species: Species_enum!
        birthdate: Date
        gender: Gender_enum
        status: Status_enum  
        location: Int
        description: String
        tags: [String]
        vaccinated: Boolean
        sterilized: Boolean
        identified: Boolean
        issues: String
        createdAt: Date
        blob: String
    }
    
    enum Species_enum{
        cat
        dog
    }

    enum Gender_enum{
        male
        female
    }

    enum Status_enum{
        urgent
        new
    }

    enum Age_enum{
        puppy
        adult
    }
`;

export default typeDefs;
