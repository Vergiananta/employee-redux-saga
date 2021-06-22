import { FIND_ALL_EDUCATION, FIND_EDUCATION_BY_ID, REMOVE_EDUCATION_BY_ID, SAVE_EDUCATION } from "../constants/actionConstant"



export function saveEducation(model) {
    return {
        type: SAVE_EDUCATION,
        model: model
    }
}

export function removeEducationById(id) {
    return {
        type: REMOVE_EDUCATION_BY_ID,
        id: id
    }
}


export function findAllEducation() {
    return {
        type: FIND_ALL_EDUCATION
    }
}

export function findById(id) {
    return {
      type: FIND_EDUCATION_BY_ID,
      id: id
    }
  }