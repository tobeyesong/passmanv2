/** @format */
/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

//Redux
import { useSelector } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  return (
    <div className='relative bg-gray-50'>
      <Popover className='relative bg-white shadow'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6'>
          <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <div className='flex items-center flex-shrink-0 px-4'>
                <img
                  className='w-auto h-12 transition-all hover:animate-spin'
                  src='https://media.publit.io/file/noun_vault_3097826-2.svg'
                  alt='PassMan'
                />
                <span className='text-2xl text-gray-500 uppercase '>
                  PassMan
                </span>
              </div>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group
              as='nav'
              className='hidden space-x-10 md:flex'></Popover.Group>
            <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
              <Link
                to='/login'
                className='text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900'>
                Sign in
              </Link>
              <Link
                to='/register'
                className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-yellow-500'>
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden'>
            <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center flex-shrink-0 px-4'>
                    <img
                      className='w-auto h-10 transition-all hover:animate-spin'
                      src='https://media.publit.io/file/noun_vault_3097826-2.svg'
                      alt='PassMan'
                    />
                    <span className='text-2xl text-gray-500 uppercase '>
                      PassMan
                    </span>
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='w-6 h-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='px-5 py-6 space-y-6'>
                <div>
                  <Link
                    to='/register'
                    className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'>
                    Sign up
                  </Link>
                  <p className='mt-6 text-base font-medium text-center text-gray-500 '>
                    Existing customer?{" "}
                    <Link
                      to='login'
                      className='text-indigo-600 hover:text-indigo-500'>
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className='w-full h-screen lg:relative'>
        <div className='w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>
                Secure all of your sensitive data with PassMan.
              </span>{" "}
              <span className='block text-yellow-600 font-extralight xl:inline'>
                Safe.Simple.Easy.
              </span>
            </h1>
            <p className='max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Are you ready to experience the Pass life?
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <Link
                  to='/register'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-500 md:py-4 md:text-lg md:px-10'>
                  Get started
                </Link>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='https://passmandemo.herokuapp.com/'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 object-cover w-full h-full'
            src='https://media.publit.io/file/Depositphotos_347145174_L-1.jpg'
            alt=''
          />
        </div>
      </main>
    </div>
  );
};

export default LandingScreen;
