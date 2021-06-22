import { FIND_ALL_EDUCATION, FIND_ALL_EDUCATION_FAILURE, FIND_ALL_EDUCATION_SUCCESS, REMOVE_EDUCATION_BY_ID, REMOVE_EDUCATION_BY_ID_FAILURE, REMOVE_EDUCATION_BY_ID_SUCCESS, REMOVE_EXPERIENCE_BY_ID, REMOVE_EXPERIENCE_BY_ID_FAILURE, REMOVE_EXPERIENCE_BY_ID_SUCCESS, SAVE_EDUCATION, SAVE_EDUCATION_FAILURE, SAVE_EDUCATION_SUCCESS, SAVE_EXPERIENCE, SAVE_EXPERIENCE_FAILURE, SAVE_EXPERIENCE_SUCCESS } from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function findAllEducation(state = initialState, data) {
    switch (data.type) {
        case FIND_ALL_EDUCATION:
            return {
                ...state,
                isLoading: true,
            }
        case FIND_ALL_EDUCATION_SUCCESS:
            return {
                data: data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_EDUCATION_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: data.error
            }
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            };
    }
}

export function saveEducation(state = { ...initialState }, action) {
    switch (action.type) {
        case SAVE_EDUCATION:
            return {
                ...state,
                data: null,
                loading: true
            };
        case SAVE_EDUCATION_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case SAVE_EDUCATION_FAILURE:
            return {
                data: null,
                loading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null
            };
    }
}

export function removeEducationById(state = { ...initialState, data: false }, action) {
    switch (action.type) {
      case REMOVE_EDUCATION_BY_ID:
        return {
          ...state,
          data: false,
          loading: true
        };
      case REMOVE_EDUCATION_BY_ID_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case REMOVE_EDUCATION_BY_ID_FAILURE:
        return {
          data: false,
          loading: false,
          error: action.error
        };
      default:
        return {
          ...state,
          data: false
        };
    }
  }