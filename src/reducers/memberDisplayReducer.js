export const memberDisplayReducer = (state = {}, action) => {
  switch (action.type) {
  case 'DISPLAY_MEMBERS':
    return {...state, [action.houseName]: true};
  case 'REMOVE_MEMBERS':
    return {...state, [action.houseName]: false};
  default:
    return state;
  }
};