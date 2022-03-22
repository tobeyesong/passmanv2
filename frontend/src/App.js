/** @format */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardScreen from "./components/screens/DashboardScreen";
import PasswordsScreen from "./components/screens/PasswordScreen";
import NotesScreen from "./components/screens/NoteScreen";
import AddressScreen from "./components/screens/AddressScreen";

import AddPasswordModal from "./components/modal/AddPasswordModal";

import EditPasswordModal from "./components/modal/EditPasswordModal";
import DeletePasswordModal from "./components/modal/DeletePasswordModal";
import AddAddressModal from "./components/modal/AddAddressModal";

import AddNoteModal from "./components/modal/AddNoteModal";
import EditNoteModal from "./components/modal/EditNoteModal";
import DeleteNoteModal from "./components/modal/DeleteNoteModal";

import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import NotFoundScreen from "./components/screens/NotFoundScreen";
import PrivateRoute from "./components/routing/PrivateRoute";
import LandingScreen from "./components/screens/LandingScreen";
import SettingScreen from "./components/screens/SettingScreen";
import SearchScreen from "./components/screens/SearchScreen";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ToastContainer className='w-4 h-4' autoClose={3500} />

        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/search' element={<SearchScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<DashboardScreen />} />
            <Route path='/setting' element={<SettingScreen />} />
            {/* //PASSWORD */}
            <Route path='/passwords' element={<PasswordsScreen />} />
            <Route path='/passwords/add' element={<AddPasswordModal />} />
            <Route
              path='/password/:id/delete'
              element={<DeletePasswordModal />}
            />
            <Route path='/password/:id/edit' element={<EditPasswordModal />} />
            {/* //NOTE */}
            <Route path='/notes' element={<NotesScreen />} />
            <Route path='/note/:id/delete' element={<DeleteNoteModal />} />
            <Route path='/note/:id/edit' element={<EditNoteModal />} />
            <Route path='/add/note' element={<AddNoteModal />} />
            <Route path='/addresses' element={<AddressScreen />} />{" "}
            <Route path='/add/address' element={<AddAddressModal />} />
          </Route>
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
