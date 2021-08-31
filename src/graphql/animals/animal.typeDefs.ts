import gql from 'graphql-tag';

const typeDefs = gql`
scalar Date

    type Query {
        animals: [Animal!]!
        animal(id: ID!): Animal
        species(species: Species_enum): [Animal]
        gender(gender: Gender_enum): [Animal]
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
        birthdate: Date!
        gender: Gender_enum!
        age: Age_enum!
        status: Status_enum!  
        location: Int!
        description: String!
        image:[Image_animal!]
    }

    type Image_animal{
        id:ID!
        filename:String!        
        size:Int
        animal:Animal!
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
