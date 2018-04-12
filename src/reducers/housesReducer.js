export const housesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_HOUSES_SUCCESS':
    return action.houses;
  default:
    return state;
  }
};
