export const errorReducer = (state = '', action) => {
  switch (action.type) {
  case 'GET_HOUSES_FAILURE':
    return action.errorMessage;
  default:
    return state;
  }
};