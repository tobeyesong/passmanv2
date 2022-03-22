/** @format */

import React from "react";
import { Link } from "react-router-dom";

import { FingerPrintIcon } from "@heroicons/react/outline";
const passwordState = () => {
  return (
    <div className='py-12 border-4 border-gray-200 border-dashed rounded-lg ove rflow-hidden h-96 md:py-20 lg:py-24'>
      <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='text-center '>
          <svg
            className='w-12 h-12 mx-auto text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'>
            <path
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
            />
          </svg>
          <h3 className='mt-2 text-sm font-medium text-gray-900'>
            No passwords
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            Get started by creating a new Password.
          </p>
          <div className='mt-6'>
            <Link
              to='/passwords/add'
              type='button'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors ease-in-out delay-75 transform bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <FingerPrintIcon
                className='w-5 h-5 mr-2 -ml-1'
                aria-hidden='true'
              />
              New Password
            </Link>
          </div>
        </div>
        <div className='relative'>
          <div className='py-2'></div>
        </div>
      </div>
    </div>
  );
};

export default passwordState;
