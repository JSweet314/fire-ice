export const getHouses = () => ({
  type: 'GET_HOUSES'
});

export const getHousesSuccess = houses => ({
  type: 'GET_HOUSES_SUCCESS',
  houses
});

export const getMembers = house => ({
  type: 'GET_MEMBERS',
  house
}); 

export const getMembersSuccess = house => ({
  type: 'GET_MEMBERS_SUCCESS',
  house
});

export const captureErrorMessage = errorMessage => ({
  type: 'CAPTURE_ERROR_MESSAGE',
  errorMessage
});