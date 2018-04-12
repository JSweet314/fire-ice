import {housesDataWrangler} from '../helpers';

export const fetchHouses = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    if (!response.ok) {
      throw new Error(`Error getting houses, status code: ${response.status}`);
    }
    const rawHouses = await response.json();
    return housesDataWrangler(rawHouses);
  } catch (error) {
    throw new Error(error.message);
  }
};