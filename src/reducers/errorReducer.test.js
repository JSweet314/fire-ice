import {errorReducer} from './errorReducer';
import * as actions from '../actions';

describe('errorReducer', () => {
  it('should return a default state', () => {
    expect(errorReducer(undefined, {})).toEqual('');
  });

  it('should set state with an error message for CAPTURE_ERROR_MESSAGE', () => {
    const mockAction = actions.captureErrorMessage('error');
    expect(errorReducer(undefined, mockAction)).toEqual('error');
  });
});