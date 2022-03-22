/** @format */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  passwordListReducer,
  passwordCreateReducer,
  passwordDetailsReducer,
  passwordDeleteReducer,
  passwordUpdateReducer,
} from "./reducers/passwordReducers";

import {
  noteListReducer,
  noteCreateReducer,
  noteDetailsReducer,
  noteDeleteReducer,
  noteUpdateReducer,
} from "./reducers/noteReducers";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  passwordList: passwordListReducer,
  passwordCreate: passwordCreateReducer,
  passwordDetails: passwordDetailsReducer,
  passwordDelete: passwordDeleteReducer,
  passwordUpdate: passwordUpdateReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteDetails: noteDetailsReducer,
  noteDelete: noteDeleteReducer,
  noteUpdate: noteUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
