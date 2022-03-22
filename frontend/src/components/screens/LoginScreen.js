/** @format */

import React, { useEffect } from "react";

//Hero Icons
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

//Final Form
import { Form, Field } from "react-final-form";
import { XCircleIcon } from "@heroicons/react/solid";
import { FORM_ERROR } from "final-form";

const required = (value) => (value ? undefined : "Required");

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  const onSubmit = async (values) => {
    dispatch(login(values));
    if (!userInfo) {
      return { [FORM_ERROR]: "Invalid Credentials. Please try again." };
    }
  };
  return (
    <div>
      <>
        <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
          <div className='w-full max-w-md space-y-8'>
            <div>
              <img
                className='w-auto mx-auto transition-all h-14 md:h-16 lg:h-24 hover:animate-spin'
                src='https://media.publit.io/file/noun_vault_3097826-2.svg'
                alt='Workflow'
              />
              <h2 className='mt-6 text-3xl font-semibold text-center text-gray-900 capitalize'>
                Sign in to your account
              </h2>
            </div>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (values.email !== "undefined") {
                  var pattern = new RegExp(
                    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
                  );

                  if (!pattern.test(values.email)) {
                    errors.email = "Please enter valid email address.";
                  }
                }

                return errors;
              }}
              render={({ handleSubmit, form, submitError }) => (
                <form onSubmit={handleSubmit}>
                  <div className='p-4 space-y-8 bg-white border-2 border-gray-100 divide-y divide-gray-200 rounded-md shadow-lg sm:space-y-5'>
                    <div>
                      <div className=''>
                        <Field
                          name='email'
                          component='input'
                          placeholder='Email address'
                          validate={required}>
                          {({ input, meta, placeholder }) => (
                            <div>
                              <div className='flex'>
                                <input
                                  {...input}
                                  placeholder={placeholder}
                                  className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"'
                                />
                              </div>
                              {meta.error && meta.touched && (
                                <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field
                          name='password'
                          type='password'
                          component='input'
                          validate={required}
                          placeholder='Password'>
                          {({ input, meta, placeholder }) => (
                            <div>
                              <div className='flex'>
                                <input
                                  {...input}
                                  placeholder={placeholder}
                                  className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                />
                              </div>
                              {meta.error && meta.touched && (
                                <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                        {submitError && (
                          <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                            <div className='flex'>
                              <div className='flex-shrink-0'>
                                <XCircleIcon
                                  className='w-5 h-5 text-red-400'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-3'>
                                <h3 className='text-sm font-medium text-red-800'>
                                  {submitError}
                                </h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-500 border border-transparent rounded-md group hover:bg-yellow-600 transistion focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                          <LockClosedIcon
                            className='w-5 h-5 text-indigo-500 group-hover:text-indigo-400'
                            aria-hidden='true'
                          />
                        </span>
                        Sign in
                      </button>
                    </div>
                    <div className='flex items-center justify-between pt-1'>
                      <div className='text-sm'>
                        New user?
                        <Link
                          to='/register'
                          className='pl-1 font-medium text-yellow-600 hover:text-blue-500'>
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginScreen;
