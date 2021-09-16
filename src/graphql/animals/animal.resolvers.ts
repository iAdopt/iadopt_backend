import fetch from 'node-fetch';

const resolvers = {
  Query: {
    animals: async (): Promise<JSON> => {
      const response = await fetch('http://localhost:8080/api/animals/');
      return response.json();
    },
    animal: async (parent:any, args: any): Promise<JSON> => {
      const response = await fetch(`http://localhost:8080/api/animals/byId/${args.id}`);
      return response.json();
    },
    species: async (parent:any, args: any): Promise<JSON> => {
      const response = await fetch(`http://localhost:8080/api/animals/bySpecies/${args.species}`);
      return response.json();
    },
    animalsFilter: async (parent: any, args: any): Promise<JSON> => {
      const response = await fetch(
        'http://localhost:8080/api/animals/byFilter/', {
          method: 'post',
          body: JSON.stringify(args),
          headers: { 'Content-Type': 'application/json' }
        }
      );
      return response.json();
    }
  }
};

export default resolvers;
