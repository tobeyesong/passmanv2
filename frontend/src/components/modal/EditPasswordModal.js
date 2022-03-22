/** @format */

import React from "react";
import { Fragment, useState, useEffect, useRef } from "react";
import { Form, Field } from "react-final-form";
import { Dialog, Transition } from "@headlessui/react";

import { XCircleIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import {
  listPasswordDetails,
  updatePassword,
} from "../../actions/passwordActions";
import { PASSWORD_UPDATE_RESET } from "../../constants/passwordConstants";

const required = (value) => (value ? undefined : "Required");

const EditPasswordModal = () => {
  const dispatch = useDispatch();
  const passwordId = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const passwordDetails = useSelector((state) => state.passwordDetails);
  const { password } = passwordDetails;

  const passwordUpdate = useSelector((state) => state.passwordUpdate);
  const { success } = passwordUpdate;

  useEffect(() => {
    if (success) {
      dispatch({ type: PASSWORD_UPDATE_RESET });
      navigate("/passwords");
    } else {
      if (!password.name || password._id !== passwordId) {
        dispatch(listPasswordDetails(passwordId.id));
      } else {
      }
    }
  }, [dispatch, passwordId, password, success, navigate]);
  let formData = {
    url: password.url,
    username: password.username,
    sitePassword: password.sitePassword,
    notes: password.notes,
  };
  //TOGGLE PASSWORD VISION
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  if (!open) {
    return <Navigate to='/' />;
  }

  const onSubmit = (values) => {
    dispatch(updatePassword({ _id: passwordId.id, values }));
  };

  return (
    <Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-10 overflow-y-auto'
          initialFocus={cancelButtonRef}
          open={open}
          onClose={setOpen}>
          <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div className='flex-auto'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 ' />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'>
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                {/* This controls the actual width of modal based on responsive design */}
                <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-100 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 lg:max-w-5xl'>
                  <div className='px-4 py-5 sm:p-6'>
                    <h3 className='p-2 space-y-8 text-lg font-medium leading-6 text-gray-800 bg-yellow-500 border-2 border-gray-300 divide-y divide-gray-200 shadow-lg rounded-t-md sm:space-y-5'>
                      Edit Password
                    </h3>
                    <hr />

                    <Form
                      onSubmit={onSubmit}
                      initialValues={{
                        ...formData,
                      }}
                      render={({ handleSubmit, submitError }) => (
                        <form onSubmit={handleSubmit}>
                          <div className='p-4 space-y-8 bg-white border-2 border-gray-100 divide-y divide-gray-200 shadow-lg rounded-b-md sm:space-y-5'>
                            <div>
                              <div className=''>
                                <label
                                  htmlFor='company-website'
                                  className='block text-sm font-medium text-gray-700'>
                                  URL
                                </label>
                                <Field
                                  name='url'
                                  component='input'
                                  placeholder='example.com'
                                  validate={required}>
                                  {({ input, meta, placeholder }) => (
                                    <div>
                                      <div className='flex'>
                                        <span className='block px-4 py-2 pl-1 mb-2 text-gray-500 border border-r-0 border-gray-300 border- rounded-l-md bg-gray-50'>
                                          https://
                                        </span>
                                        <input
                                          {...input}
                                          placeholder={placeholder}
                                          className='block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 shadow rounded-r-md text-l focus:outline-none border-gray focus:border-blue-500'
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
                              </div>

                              <div className='grid grid-cols-6 gap-6 '>
                                <Field
                                  name='username'
                                  component='input'
                                  placeholder='Enter Username'
                                  validate={required}>
                                  {({ input, meta, placeholder }) => (
                                    <div className='col-span-6 sm:col-span-3'>
                                      <div>
                                        <label
                                          htmlFor='first-name'
                                          className='block text-sm font-medium text-gray-700'>
                                          Username
                                        </label>
                                        <input
                                          type='text'
                                          {...input}
                                          placeholder={placeholder}
                                          className='block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                  name='sitePassword'
                                  component='input'
                                  placeholder='password.sitePassword'
                                  validate={required}>
                                  {({ input, meta, placeholder }) => (
                                    <div className='col-span-6 sm:col-span-3'>
                                      <div>
                                        <label
                                          htmlFor='first-name'
                                          className='block text-sm font-medium text-gray-700'>
                                          Site Password
                                        </label>
                                        <div className='flex '>
                                          <input
                                            type={
                                              passwordShown
                                                ? "text"
                                                : "password"
                                            }
                                            {...input}
                                            placeholder={placeholder}
                                            className='block w-full px-4 py-2 pl-1 mb-2 border-2 border-t-2 border-b-2 border-l-2 border-gray-300 shadow rounded-l-md text-l focus:outline-none focus:border-blue-500'
                                          />
                                          <span className=''>
                                            <div className='relative grid gap-0 px-2 py-2 bg-gray-100 border-2 border-t-2 border-b-2 border-r-2 border-gray-300 shadow focus:outline-none hover:bg-gray-200 rounded-r-md sm:gap-2 sm:p-x-6 '>
                                              <button
                                                type='button'
                                                onClick={togglePassword}
                                                className='flex-shrink-0 w-6 h-auto text-indigo-600 focus:outline-none'
                                                aria-hidden='true'>
                                                {passwordShown ? (
                                                  <EyeOffIcon />
                                                ) : (
                                                  <EyeIcon />
                                                )}
                                              </button>
                                            </div>
                                          </span>
                                        </div>
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

                              <Field
                                name='notes'
                                component='textarea'
                                placeholder='Enter Notes Here'
                                className='box-border block w-full h-32 p-4 px-4 py-2 pl-1 mb-2 border-4 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
                              />
                            </div>
                            <div className='pt-5'>
                              <div className='flex justify-end'>
                                <button
                                  type='button'
                                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                  Cancel
                                </button>
                                <button
                                  type='submit'
                                  className='inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

export default EditPasswordModal;
