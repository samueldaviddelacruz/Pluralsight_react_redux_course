/**
 * Created by Samuel on 2/22/2017.
 */
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export async function loadAuthors() {

  let authors;
  try {
    beginAjaxCall();
    authors = await AuthorApi.getAllAuthors();
    return loadAuthorsSuccess(authors);
  } catch (error) {
    throw(error);
  }

  //
  // return dispatch => {
  //   dispatch(beginAjaxCall());
  //   return AuthorApi.getAllAuthors().then(authors => {
  //     dispatch(loadAuthorsSuccess(authors));
  //   }).catch(error => {
  //     throw(error);
  //   });
  // };
}
