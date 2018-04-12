export const getHouses = () => ({
  type: 'GET_HOUSES'
});

export const getHousesSuccess = houses => ({
  type: 'GET_HOUSES_SUCCESS',
  houses
});

export const getHousesFailure = errorMessage => ({
  type: 'GET_HOUSES_FAILURE',
  errorMessage
});
