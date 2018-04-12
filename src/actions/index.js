export const getHouses = () => ({
  type: 'GET_HOUSES'
});

export const captureHouses = houses => ({
  type: 'CAPTURE_HOUSES',
  houses
});
