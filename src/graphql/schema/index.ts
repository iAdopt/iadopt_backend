import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';

import animalSchema from './animals';

const schema = makeExecutableSchema({
  typeDefs: [animalSchema.typeDefs],
  resolvers: merge(animalSchema.resolvers),
});

export default schema;
