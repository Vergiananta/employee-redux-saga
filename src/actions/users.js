import { FIND_ALL_USER, FIND_USER_BY_ID, REMOVE_USER_BY_ID, SAVE_USER } from "../constants/actionConstant";

export function saveUser(model) {
    return {
        type: SAVE_USER,
        model: model
    }
}

export function removeUserById(id) {
    return {
        type: REMOVE_USER_BY_ID,
        id: id
    }
}


export function findAllUser() {
    return {
        type: FIND_ALL_USER
    }
}

export function findUserById(id) {
    return {
      type: FIND_USER_BY_ID,
      id: id
    }
  }