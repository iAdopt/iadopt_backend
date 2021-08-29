exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: false });
  pgm.createType('species_enum', ['cat', 'dog']);
  pgm.createType('gender_enum', ['female', 'male']);
  pgm.createType('status_enum', ['urgent', 'new']);
  pgm.createTable('animals', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    name: { type: 'string' },
    species: { type: 'species_enum' },
    birthdate: { type: 'Date' },
    gender: { type: 'gender_enum' },
    status: { type: 'status_enum' },
    location: { type: 'int' },
    description: { type: 'string' }
  });
};
