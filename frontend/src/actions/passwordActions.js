/** @format */
import axios from "axios";
import {
  PASSWORD_LIST_REQUEST,
  PASSWORD_LIST_SUCCESS,
  PASSWORD_LIST_FAIL,
  PASSWORD_DELETE_REQUEST,
  PASSWORD_DELETE_SUCCESS,
  PASSWORD_DELETE_FAIL,
  PASSWORD_CREATE_REQUEST,
  PASSWORD_CREATE_SUCCESS,
  PASSWORD_CREATE_FAIL,
  PASSWORD_DETAILS_REQUEST,
  PASSWORD_DETAILS_SUCCESS,
  PASSWORD_DETAILS_FAIL,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAIL,
} from "../constants/passwordConstants";

import { toast } from "react-toastify";

export const listPasswords = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PASSWORD_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("api/passwords", config);

    dispatch({
      type: PASSWORD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPassword = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: PASSWORD_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/passwords`, formData, config);

    dispatch({
      type: PASSWORD_CREATE_SUCCESS,
      payload: data,
    });
    toast.success("Password Created");
  } catch (error) {
    dispatch({
      type: PASSWORD_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPasswordDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/passwords/${id}`);

    dispatch({
      type: PASSWORD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePassword = (id) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_DELETE_REQUEST, payload: id });

    await axios.delete(`/api/passwords/${id}`);

    dispatch({
      type: PASSWORD_DELETE_SUCCESS,
    });
    toast.error("Password Deleted");
  } catch (error) {
    dispatch({
      type: PASSWORD_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_UPDATE_REQUEST });

    const { data } = await axios.put(
      `/api/passwords/${password._id}`,
      password
    );
    dispatch({
      type: PASSWORD_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: PASSWORD_DETAILS_SUCCESS, payload: data });
    toast.info("Password Updated");
  } catch (error) {
    dispatch({
      type: PASSWORD_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
