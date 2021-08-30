exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: false });
  pgm.createType('specie_enum', ['CAT', 'DOG']);
  pgm.createTable('animals', {
    id: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    name: { type: 'string' },
    specie: { type: 'specie_enum' }
  });
  pgm.createTable('users', {
    id: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    username: { type: 'string' },
    password: { type: 'string' }
  });
  pgm.createTable('chatRoom', {
    id: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    }
  });
  pgm.createTable('message', {
    id: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    content: {
      type: 'string'
    }
  });
};
