exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: false });
  pgm.createType('specie_enum',['CAT','DOG']);
  pgm.createTable('animals', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    name: { type: 'string' },
    specie:{type: 'specie_enum'},
  });  
};
