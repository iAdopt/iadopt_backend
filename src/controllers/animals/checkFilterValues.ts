import { ApiError } from '../../middlewares/errorHandler';

const NUMBER_OF_REGIONS = 41;

export const validFilterValues: { [key: string]: string[] } = {
  species: ['cat', 'dog', '', undefined],
  age: ['baby', 'adult', '', undefined],
  gender: ['female', 'male', '', undefined],
  status: ['urgent', 'new', '', undefined],
  location: [...Array.from(
    { length: NUMBER_OF_REGIONS },
    (_, i) => i + 1).map(element => element.toString().padStart(2, '0')
  ), '', undefined]
};

export const checkFilterValues = (key: string, value: any): any => {
  if (!(validFilterValues[key].includes(value))) {
    throw new ApiError(400, `Invalid ${key}.`);
  }
  return { [key]: value || null };
};
