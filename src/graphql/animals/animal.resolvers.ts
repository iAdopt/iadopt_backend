import fetch from 'node-fetch';

const resolvers = {
  Query: {
    animals: async (): Promise<JSON> => {
      const response = await fetch('http://localhost:8080/api/animals/all');
      return response.json();
    },
    animal: async (): Promise<JSON> => {
      const response = await fetch('http://localhost:8080/api/animals/byId/:animal');
      return response.json();
    },
    species: async (): Promise<JSON> => {
      const response = await fetch('http://localhost:8080/api/animals/bySpecie/:species');
      return response.json();
    },
    animalsFilter: async (): Promise<JSON> => {
      const response = await fetch('http://localhost:8080/api/animals/byFilter#animalsByFilter');
      return response.json();
    }
  }
};

export default resolvers;
