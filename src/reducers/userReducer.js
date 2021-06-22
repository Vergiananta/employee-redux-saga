import { FIND_ALL_USER, FIND_ALL_USER_FAILURE, FIND_ALL_USER_SUCCESS, FIND_USER_BY_ID, FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_SUCCESS, REMOVE_USER_BY_ID, REMOVE_USER_BY_ID_FAILURE, REMOVE_USER_BY_ID_SUCCESS, SAVE_USER, SAVE_USER_FAILURE, SAVE_USER_SUCCESS } from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function findAllUsers(state = initialState, data) {
    switch (data.type) {
        case FIND_ALL_USER:
            return {
                ...state,
                isLoading: true,
            }
        case FIND_ALL_USER_SUCCESS:
            return {
                data: data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_USER_FAILURE:
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

export function saveUser(state = { ...initialState }, action) {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                data: null,
                loading: true
            };
        case SAVE_USER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case SAVE_USER_FAILURE:
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

export function removeUserById(state = { ...initialState, data: false }, action) {
    switch (action.type) {
        case REMOVE_USER_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            };
        case REMOVE_USER_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case REMOVE_USER_BY_ID_FAILURE:
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

export function findUserById(state = initialState, action) {
    switch (action.type) {
      case FIND_USER_BY_ID:
        return {
          ...state,
          data: null,
          loading: true
        };
      case FIND_USER_BY_ID_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case FIND_USER_BY_ID_FAILURE:
        return {
          data: null,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  }