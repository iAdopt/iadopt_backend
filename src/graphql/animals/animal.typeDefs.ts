import gql from 'graphql-tag';

const typeDefs = gql`
scalar Date

    type Query {
        animals: [Animal!]!
        animal(id: ID!): Animal
        species(species:Species_enum):[Animal]
        gender(gender:Gender_enum):[Animal]
        animalsFilter(species:Species_enum!,gender:Gender_enum!,status:Status_enum!,location:Int!):[Animal]
    }

    type Animal {
        id: ID!,
        name: String!,
        species:Species_enum!,
        birthdate: Date!,
        gender:Gender_enum!,
        status:Status_enum!,
        location:Int!
        description:String!
    }
    
    enum Species_enum{
        CAT
        DOG
    }

    enum Gender_enum{
        MALE
        FEMALE
    }

    enum Status_enum{
        URGENT
        NEW
    }
`;


export default typeDefs;