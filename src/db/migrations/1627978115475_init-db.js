exports.up = (pgm) => {
  pgm.createExtension('uuid-ossp', { ifNotExists: false });
  pgm.createType('specie_enum',['CAT','DOG']);
  pgm.createType('gender_enum',['FEMALE','MALE']);
  pgm.createType('state_enum',['URGENT','NEW']);
  pgm.createTable('animals', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    name: { type: 'string' },
    specie:{type: 'specie_enum'},
    birthdate:{type:'Date'},
    gender:{type:'gender_enum'},
    state:{type:'state_enum'},
    location:{type:'String'},
  });  
};