/** @format */

import React from "react";
import Sidebar from "../navbar/Sidebar";
import SearchBar from "../navbar/SearchBar";
import PasswordContent from "../content/PasswordContent";

const DashboardScreen = () => {
  return (
    <div className='relative flex flex-1 h-screen overflow-auto bg-gray-100'>
      <Sidebar />
      <div className='flex flex-col flex-1 w-0 overflow-auto'>
        <SearchBar />
        <PasswordContent title='Passwords' />
      </div>
    </div>
  );
};

export default DashboardScreen;
