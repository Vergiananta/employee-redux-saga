import axios from "../configs/api";
import { FIND_ALL_USER, FIND_ALL_USER_FAILURE, FIND_ALL_USER_SUCCESS, FIND_USER_BY_ID, FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_SUCCESS, REMOVE_USER_BY_ID, REMOVE_USER_BY_ID_FAILURE, REMOVE_USER_BY_ID_SUCCESS, SAVE_USER, SAVE_USER_FAILURE, SAVE_USER_SUCCESS } from "../constants/actionConstant";
import { put, takeLatest } from 'redux-saga/effects';


function* saveUser(action) {
    let data = action.model;
    let result = yield axios.post('/items/users', data).then(data => {
        return {
            type: SAVE_USER_SUCCESS,
            data: data
        };
    }).catch(e => {
        return {
            type: SAVE_USER_FAILURE,
            error: e
        };
    });

    yield put(result);
}

function* findAllUsers() {
    console.log("masuk");
    let result = yield axios.get('/items/users')
        .then(data => {
            console.log("tes",data);
            return {
                type: FIND_ALL_USER_SUCCESS,
                data: data
            };
        }).catch(e => {
            console.log("error", e)
            return {
                type: FIND_ALL_USER_FAILURE,
                error: e
            };
        });
        console.log("result", result);
    yield put(result);
}

function* removeUserById(action) {
    let result = yield axios.delete(`/items/users/${action.id}`)
        .then(data => {
            return {
                type: REMOVE_USER_BY_ID_SUCCESS,
                data: data
            };
        })
        .catch(e => {
            return {
                type: REMOVE_USER_BY_ID_FAILURE,
                error: e
            };
        });

    yield put(result);
}

function* findUserById(action){
    let result = yield axios.get(`/items/users/${action.id}`)
    .then(data => {
      return {
        type: FIND_USER_BY_ID_SUCCESS,
        data: data
      };
    })
    .catch(e => {
      return {
        type: FIND_USER_BY_ID_FAILURE,
        error: e
      };
    });

  yield put(result);
}

export function* watchSaveUnit() {
    yield takeLatest(SAVE_USER, saveUser)
}

export function* watchFindAllUsers() {
    yield takeLatest(FIND_ALL_USER, findAllUsers)
}

export function* watchRemoveUserById() {
    yield takeLatest(REMOVE_USER_BY_ID, removeUserById);
}

export function* watchFindUserById() {
    yield takeLatest(FIND_USER_BY_ID, findUserById);
}