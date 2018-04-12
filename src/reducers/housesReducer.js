export const housesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_HOUSES_SUCCESS':
    return action.houses;
  case 'GET_MEMBERS_SUCCESS':
    return state.map(house => {
      if (house.name === action.house.name) {
        return {...house, swornMembers: action.house.swornMembers};
      }
      return house;
    });
  default:
    return state;
  }
};
