/** @format */
import axios from "axios";
import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
  NOTE_DELETE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_CREATE_FAIL,
  NOTE_DETAILS_REQUEST,
  NOTE_DETAILS_SUCCESS,
  NOTE_DETAILS_FAIL,
  NOTE_UPDATE_REQUEST,
  NOTE_UPDATE_SUCCESS,
  NOTE_UPDATE_FAIL,
} from "../constants/noteConstants";

import { toast } from "react-toastify";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("api/notes", config);

    dispatch({
      type: NOTE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNote = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTE_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/notes`, formData, config);

    dispatch({
      type: NOTE_CREATE_SUCCESS,
      payload: data,
    });
    toast.success("Note Created");
  } catch (error) {
    dispatch({
      type: NOTE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listNoteDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/notes/${id}`);

    dispatch({
      type: NOTE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_DELETE_REQUEST, payload: id });

    await axios.delete(`/api/notes/${id}`);

    dispatch({
      type: NOTE_DELETE_SUCCESS,
    });
    toast.error("Note Deleted");
  } catch (error) {
    dispatch({
      type: NOTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateNote = (note) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_UPDATE_REQUEST });

    const { data } = await axios.put(`/api/notes/${note._id}`, note);
    dispatch({
      type: NOTE_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: NOTE_DETAILS_SUCCESS, payload: data });
    toast.info("Note Updated");
  } catch (error) {
    dispatch({
      type: NOTE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
