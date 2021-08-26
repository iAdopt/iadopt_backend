import gql from 'graphql-tag';

const typeDefs = gql`
scalar Date

    type Query {
        animals: [Animal!]!
        animal(id: ID!): Animal
        specie(specie:Specie_enum):[Animal]
        gender(gender:Gender_enum):[Animal]
        animalsFilter(specie:Specie_enum!,gender:Gender_enum!,status:State_enum!,location:Int!):[Animal]
    }

    type Animal {
        id: ID!,
        name: String!,
        specie:Specie_enum!,
        birthdate: Date!,
        gender:Gender_enum!,
        status:State_enum!,
        location:Int!
        description:String!
    }
    
    enum Specie_enum{
        CAT
        DOG
    }

    enum Gender_enum{
        MALE
        FEMALE
    }

    enum State_enum{
        URGENT
        NEW
    }
`;


export default typeDefs;