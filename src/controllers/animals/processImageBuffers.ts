export const processImageBuffers = (animals: any) => {
  animals.rows.map((animal: any) => {
    animal.blob = animal.blob ? animal.blob.toString('base64') : null;
    return animal;
  });
  return animals;
};
