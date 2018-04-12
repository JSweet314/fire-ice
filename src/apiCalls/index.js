const rootURL = 'http://localhost:3001/api/v1';

export const fetchHouses = async () => {
  try {
    const response = await fetch(`${rootURL}/houses`);
    if (!response.ok) {
      throw new Error(`Bad response, status code - ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching houses: ${error.message}`);
  }
};

export const fetchSwornMembers = members => {
  const unresolvedMembers = members.map(async member => {
    try {
      const response = await fetch(`${rootURL}/character/${member}`);
      if (!response.ok) {
        throw new Error(`Bad response, status code - ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching members: ${error.message}`); 
    }
  });
  return Promise.all(unresolvedMembers);
};