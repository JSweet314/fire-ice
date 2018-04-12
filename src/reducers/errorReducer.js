export const errorReducer = (state = '', action) => {
  switch (action.type) {
  case 'CAPTURE_ERROR_MESSAGE':
    return action.errorMessage;
  default:
    return state;
  }
};