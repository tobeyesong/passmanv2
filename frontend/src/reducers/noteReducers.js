/** @format */
import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
  NOTE_DELETE_FAIL,
  NOTE_DELETE_RESET,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_CREATE_FAIL,
  NOTE_CREATE_RESET,
  NOTE_DETAILS_REQUEST,
  NOTE_DETAILS_SUCCESS,
  NOTE_DETAILS_FAIL,
  NOTE_UPDATE_REQUEST,
  NOTE_UPDATE_SUCCESS,
  NOTE_UPDATE_FAIL,
  NOTE_UPDATE_RESET,
} from "../constants/noteConstants";

//NOTES

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return {
        loading: true,
        notes: [],
      };
    case NOTE_LIST_SUCCESS:
      return { notes: action.payload, loading: false };
    case NOTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const noteDetailsReducer = (state = { note: {} }, action) => {
  switch (action.type) {
    case NOTE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case NOTE_DETAILS_SUCCESS:
      return { loading: false, note: action.payload };
    case NOTE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_DELETE_REQUEST:
      return { loading: true };
    case NOTE_DELETE_SUCCESS:
      return { loading: false, success: true, state: {} };
    case NOTE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case NOTE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_CREATE_REQUEST:
      return { loading: true };
    case NOTE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        note: action.payload,
      };
    case NOTE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case NOTE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const noteUpdateReducer = (state = { note: {} }, action) => {
  switch (action.type) {
    case NOTE_UPDATE_REQUEST:
      return { loading: true };
    case NOTE_UPDATE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case NOTE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case NOTE_UPDATE_RESET:
      return { note: {} };
    default:
      return state;
  }
};
