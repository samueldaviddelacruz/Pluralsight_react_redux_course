import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}


export async function loadCourses() {
  let courses;
  try {

    //dispatch();
    beginAjaxCall();
    courses = await courseApi.getAllCourses();
    //console.log('loadCourses2 data',result);
    //dispatch();
    return loadCoursesSuccess(courses);
  } catch (error) {
    throw(error);
  }
  //return courses;
}
export function loadCourses_old() {

  const courseDispatch = async function (dispatch) {
    let result;
    try {
      dispatch(beginAjaxCall());
      result = await courseApi.getAllCourses();

      dispatch(loadCoursesSuccess(result));

    } catch (error) {
      throw(error);
    }

    return result;
  };

  return courseDispatch;
}

export async function saveCourse(course) {

  let returnedCourse;
  try {

    beginAjaxCall();
    returnedCourse = await courseApi.saveCourse(course);

    if (returnedCourse.id) {
      return updateCourseSuccess(course);
    }
    return createCourseSuccess(course);

  } catch (e) {

    return ajaxCallError(e);
  }

}


export function saveCourse_old(course) {

  const saveCourseDispatch = async(dispatch) => {
    let returnedCourse;
    try {
      dispatch(beginAjaxCall());

      returnedCourse = await courseApi.saveCourse(course);

      if (returnedCourse.id) {
        return dispatch(updateCourseSuccess(course));
      }
      return dispatch(createCourseSuccess(course));

    } catch (error) {
      dispatch(ajaxCallError(error));
      throw(error);
    }
  };


  //ugly AF, fucking thunks
  // return function (dispatch, getState) {
  //   dispatch(beginAjaxCall());
  //   return courseApi.saveCourse(course).then(course => {
  //
  //     course.id ? dispatch(updateCourseSuccess(course)) :
  //       dispatch(createCourseSuccess(course));
  //
  //   }).catch(error => {
  //     dispatch(ajaxCallError(error));
  //     throw(error);
  //   });
  // };

  return saveCourseDispatch;


}
