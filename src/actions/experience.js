import { FIND_ALL_EXPERIENCE, FIND_EXPERIENCE_BY_ID, REMOVE_EXPERIENCE_BY_ID, SAVE_EXPERIENCE } from "../constants/actionConstant"


export function saveExperience(model) {
    return {
        type: SAVE_EXPERIENCE,
        model: model
    }
}

export function removeExperienceById(id) {
    return {
        type: REMOVE_EXPERIENCE_BY_ID,
        id: id
    }
}


export function findAllExperience() {
    return {
        type: FIND_ALL_EXPERIENCE
    }
}

export function findById(id) {
    return {
      type: FIND_EXPERIENCE_BY_ID,
      id: id
    }
  }