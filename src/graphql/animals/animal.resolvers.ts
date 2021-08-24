import fetch from 'node-fetch'

const resolvers = {
  Query: {
    animals: async (): Promise<JSON> => {
      const response = await fetch('http://localhost:8080/api/animals/all')
      return response.json()
    }
  }
}

export default resolvers
