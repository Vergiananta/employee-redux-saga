import axios from "../configs/api";
import { put, takeLatest } from "redux-saga/effects";
import { FIND_ALL_EDUCATION, FIND_ALL_EDUCATION_FAILURE, FIND_ALL_EDUCATION_SUCCESS, 
    REMOVE_EDUCATION_BY_ID, 
    REMOVE_EDUCATION_BY_ID_FAILURE, 
    REMOVE_EDUCATION_BY_ID_SUCCESS, 
    SAVE_EDUCATION, SAVE_EDUCATION_FAILURE, SAVE_EDUCATION_SUCCESS } from "../constants/actionConstant";

function* saveEducation(action) {
    let data = action.model;
    let result = yield axios.post('/items/education', data).then(data => {
        return {
            type: SAVE_EDUCATION_SUCCESS,
            data: data
        };
    }).catch(e => {
        return {
            type: SAVE_EDUCATION_FAILURE,
            error: e
        };
    });

    yield put(result);
}

function* findAllEducation() {
    let result = yield axios.get('/items/users')
    .then(data => {
        return {
            type: FIND_ALL_EDUCATION_SUCCESS,
            data: data
        };
    }).catch(e => {
        return {
            type: FIND_ALL_EDUCATION_FAILURE,
            error: e
        };
    });

    yield put(result);
}

function* removeEducationById(action) {
    let result = yield axios.delete(`/items/education/${action.id}`)
      .then(data => {
        return {
          type: REMOVE_EDUCATION_BY_ID_SUCCESS,
          data: data
        };
      })
      .catch(e => {
        return {
          type: REMOVE_EDUCATION_BY_ID_FAILURE,
          error: e
        };
      });
  
    yield put(result);
  }

export function* watchSaveEducation() {
    yield takeLatest(SAVE_EDUCATION, saveEducation)
}

export function* watchFindAllEducation() {
    yield takeLatest(FIND_ALL_EDUCATION, findAllEducation)
}

export function* watchRemoveEducationById() {
    yield takeLatest(REMOVE_EDUCATION_BY_ID, removeEducationById)
}