exports.up = (pgm) => {
  pgm.createTable('animals', {
    id: { type: 'uuid', primaryKey: true },
    name: { type: 'string' },
  });
};
