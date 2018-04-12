export const housesReducer = (state = [], action) => {
  switch (action.type) {
  case 'CAPTURE_HOUSES':
    return action.houses;
  default:
    return state;
  }
};
