/**
 * Created by Samuel on 2/22/2017.
 */
/**
 * Created by Samuel on 2/21/2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:

      return action.authors;

    default:
      return state;
  }
}
