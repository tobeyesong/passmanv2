/** @format */
import {
  PASSWORD_LIST_REQUEST,
  PASSWORD_LIST_SUCCESS,
  PASSWORD_LIST_FAIL,
  PASSWORD_DELETE_REQUEST,
  PASSWORD_DELETE_SUCCESS,
  PASSWORD_DELETE_FAIL,
  PASSWORD_DELETE_RESET,
  PASSWORD_CREATE_REQUEST,
  PASSWORD_CREATE_SUCCESS,
  PASSWORD_CREATE_FAIL,
  PASSWORD_CREATE_RESET,
  PASSWORD_DETAILS_REQUEST,
  PASSWORD_DETAILS_SUCCESS,
  PASSWORD_DETAILS_FAIL,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAIL,
  PASSWORD_UPDATE_RESET,
} from "../constants/passwordConstants";

// import { PASSWORD_LIST_CLEAR } from "../constants/passwordConstants";

//PASSWORDS

export const passwordListReducer = (state = { passwords: [] }, action) => {
  switch (action.type) {
    case PASSWORD_LIST_REQUEST:
      return {
        loading: true,
        passwords: [],
      };
    case PASSWORD_LIST_SUCCESS:
      return { passwords: action.payload, loading: false };
    case PASSWORD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const passwordDetailsReducer = (state = { password: {} }, action) => {
  switch (action.type) {
    case PASSWORD_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PASSWORD_DETAILS_SUCCESS:
      return { loading: false, password: action.payload };
    case PASSWORD_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const passwordDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PASSWORD_DELETE_REQUEST:
      return { loading: true };
    case PASSWORD_DELETE_SUCCESS:
      return { loading: false, success: true, state: {} };
    case PASSWORD_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PASSWORD_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const passwordCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PASSWORD_CREATE_REQUEST:
      return { loading: true };
    case PASSWORD_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        password: action.payload,
      };
    case PASSWORD_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PASSWORD_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const passwordUpdateReducer = (state = { password: {} }, action) => {
  switch (action.type) {
    case PASSWORD_UPDATE_REQUEST:
      return { loading: true };
    case PASSWORD_UPDATE_SUCCESS:
      return { loading: false, success: true, password: action.payload };
    case PASSWORD_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PASSWORD_UPDATE_RESET:
      return { password: {} };
    default:
      return state;
  }
};

//CLEAR PASSWORD
// export const passwordListClear = (state = { passwords: [] }, action) => {
//   switch (action.type) {
//     case PASSWORD_LIST_CLEAR:
//       return {
//         loading: false,
//         passwords: null,
//       };
//   }
// };
