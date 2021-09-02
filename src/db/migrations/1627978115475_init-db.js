exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: true });
  pgm.createType('species_enum', ['cat', 'dog']);
  pgm.createType('gender_enum', ['female', 'male']);
  pgm.createType('status_enum', ['urgent', 'new']);
  pgm.createTable('centers', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    name: { type: 'text', notNull: true },
    email: { type: 'text', notNull: true },
    phone: { type: 'text', notNull: true },
    address: { type: 'text', notNull: true }
  });
  pgm.createTable('animals', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    name: { type: 'string' },
    species: { type: 'species_enum' },
    birthdate: { type: 'Date' },
    gender: { type: 'gender_enum' },
    status: { type: 'status_enum' },
    location: { type: 'int' },
    description: { type: 'string' },
    vaccinated: { type: 'bool' },
    sterilized: { type: 'bool' },
    identified: { type: 'bool' },
    issues: { type: 'text' },
    createdAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    tags: { type: 'text []' },
    center: { type: 'uuid', references: 'centers', notNull: true }
  });
  pgm.createTable('logs', {
    timestamp: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    process: { type: 'string' },
    message: { type: 'text' }
  });
  pgm.createTable('images', {
    blob: { type: 'bytea', notNull: true },
    animal: { type: 'uuid', references: 'animals' },
    uploadedAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') }
  });
};
