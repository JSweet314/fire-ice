export const fetchHouses = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    if (!response.ok) {
      throw new Error(`Error getting houses, status code: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};