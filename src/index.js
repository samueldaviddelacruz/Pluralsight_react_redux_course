/**
 * Created by Samuel on 2/5/2017.
 */
/*eslint-disable import/default */

import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';


const store = configureStore();

(async() => {
  try {
    let courses = await loadCourses();
    let authors = await loadAuthors();

    store.dispatch(courses);
    store.dispatch(authors);
  } catch (e) {
    throw(e);
  }
})();

//store.dispatch(loadCourses());
//store.dispatch(loadAuthors());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>

  </Provider>,
  document.getElementById('app')
);
