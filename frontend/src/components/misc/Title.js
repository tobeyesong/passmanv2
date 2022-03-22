/** @format */

import React from "react";

const Title = (props) => {
  return (
    <div className='relative mt-2 '>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-blue-300' />
      </div>
      <div className='relative flex justify-start'>
        <span className='py-1 pl-1 pr-3 text-sm font-medium bg-blue-500 rounded-md md:text-md lg:text-lg text-gray-50'>
          {props.title}
        </span>
      </div>
    </div>
  );
};

export default Title;
