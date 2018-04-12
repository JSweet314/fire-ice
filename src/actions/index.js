export const getHouses = () => ({
  type: 'GET_HOUSES'
});

export const getHousesSuccess = houses => ({
  type: 'GET_HOUSES_SUCCESS',
  houses
});

export const captureErrorMessage = errorMessage => ({
  type: 'CAPTURE_ERROR_MESSAGE',
  errorMessage
});
