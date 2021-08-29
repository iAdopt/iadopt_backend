exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: false });
<<<<<<< HEAD
  pgm.createType('species_enum', ['CAT', 'DOG']);
  pgm.createType('gender_enum', ['FEMALE', 'MALE']);
  pgm.createType('status_enum', ['URGENT', 'NEW']);
=======
  pgm.createType('species_enum', ['cat', 'dog']);
  pgm.createType('gender_enum', ['female', 'male']);
  pgm.createType('status_enum', ['urgent', 'new']);
>>>>>>> master
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
