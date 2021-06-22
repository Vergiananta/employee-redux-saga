import axios from "../configs/api";
import { put, takeLatest } from "redux-saga/effects";
import { FIND_ALL_EXPERIENCE, FIND_ALL_EXPERIENCE_FAILURE, FIND_ALL_EXPERIENCE_SUCCESS, REMOVE_EXPERIENCE_BY_ID, REMOVE_EXPERIENCE_BY_ID_FAILURE, REMOVE_EXPERIENCE_BY_ID_SUCCESS, SAVE_EXPERIENCE, SAVE_EXPERIENCE_FAILURE, SAVE_EXPERIENCE_SUCCESS } from "../constants/actionConstant";

function* saveExperience(action) {
    let data = action.model;
    let result = yield axios.post('/items/experience', data).then(data => {
        return {
            type: SAVE_EXPERIENCE_SUCCESS,
            data: data
        };
    }).catch(e => {
        return {
            type: SAVE_EXPERIENCE_FAILURE,
            error: e
        };
    });

    yield put(result);
}

function* findAllExperience() {
    let result = yield axios.get('/items/experience')
    .then(data => {
        return {
            type: FIND_ALL_EXPERIENCE_SUCCESS,
            data: data
        };
    }).catch(e => {
        return {
            type: FIND_ALL_EXPERIENCE_FAILURE,
            error: e
        };
    });

    yield put(result);
}

function* removeExperienceById(action) {
    let result = yield axios.delete(`/items/experience/${action.id}`)
      .then(data => {
        return {
          type: REMOVE_EXPERIENCE_BY_ID_SUCCESS,
          data: data
        };
      })
      .catch(e => {
        return {
          type: REMOVE_EXPERIENCE_BY_ID_FAILURE,
          error: e
        };
      });
  
    yield put(result);
  }

export function* watchSaveExperience() {
    yield takeLatest(SAVE_EXPERIENCE, saveExperience)
}

export function* watchFindAllExperience() {
    yield takeLatest(FIND_ALL_EXPERIENCE, findAllExperience)
}

export function* watchRemoveExperienceById() {
    yield takeLatest(REMOVE_EXPERIENCE_BY_ID, removeExperienceById)
}