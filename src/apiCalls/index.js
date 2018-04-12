import * as helpers from '../helpers';

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

export const fetchSwornMember = async memberId => {
  try {
    const response = await fetch(`${rootURL}/character/${memberId}`);
    if (!response.ok) {
      throw new Error(
        `Error getting member ${memberId}, status code: ${response.status}`
      );
    }
    const rawMembers = await response.json();
    return helpers.swornMembersDataWrangler(rawMembers);
  } catch (error) {
    throw new Error(`Error fetching members: ${error.message}`);
  }
};