/** @format */
import React from "react";

import SettingBar from "../navbar/SettingBar";
import Sidebar from "../navbar/Sidebar";
import SettingContent from "../content/SettingContent";

export default function SettingScreen() {
  return (
    <div>
      <div className='relative flex flex-1 h-screen overflow-auto bg-gray-100'>
        <Sidebar />
        <div className='flex flex-col flex-1 w-0 overflow-auto'>
          <SettingBar />
          <div className='mx-auto md:py-2 lg:py-4 max-w-7xl sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto '>
              <SettingContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
