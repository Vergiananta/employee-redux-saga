import { FIND_ALL_EXPERIENCE, FIND_ALL_EXPERIENCE_FAILURE, FIND_ALL_EXPERIENCE_SUCCESS, REMOVE_EXPERIENCE_BY_ID, REMOVE_EXPERIENCE_BY_ID_FAILURE, REMOVE_EXPERIENCE_BY_ID_SUCCESS, SAVE_EXPERIENCE, SAVE_EXPERIENCE_FAILURE, SAVE_EXPERIENCE_SUCCESS } from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function findAllExperience(state = initialState, data) {
    switch (data.type) {
        case FIND_ALL_EXPERIENCE:
            return {
                ...state,
                isLoading: true,
            }
        case FIND_ALL_EXPERIENCE_SUCCESS:
            return {
                data: data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_EXPERIENCE_FAILURE:
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

export function saveExperience(state = { ...initialState }, action) {
    switch (action.type) {
        case SAVE_EXPERIENCE:
            return {
                ...state,
                data: null,
                loading: true
            };
        case SAVE_EXPERIENCE_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case SAVE_EXPERIENCE_FAILURE:
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

export function removeExperienceById(state = { ...initialState, data: false }, action) {
    switch (action.type) {
        case REMOVE_EXPERIENCE_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            };
        case REMOVE_EXPERIENCE_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case REMOVE_EXPERIENCE_BY_ID_FAILURE:
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