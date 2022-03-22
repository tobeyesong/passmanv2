/** @format */

import React, { useEffect } from "react";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";

import { useNavigate } from "react-router-dom";
//Final Form
import { Form, Field } from "react-final-form";
import { UserCircleIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Account", href: "", icon: UserCircleIcon, current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SettingContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
      }
    }
  }, [dispatch, userInfo, user, success, navigate]);

  let formData = {
    name: user.name,
    email: user.email,
  };
  const onSubmit = (values) => {
    dispatch(updateUserProfile({ id: user._id, values }));
  };

  return (
    <div className='lg:grid lg:grid-cols-12 lg:gap-x-5'>
      <aside className='px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3'>
        <nav className='space-y-1'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
                  : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}>
              <item.icon
                className={classNames(
                  item.current
                    ? "text-indigo-500 group-hover:text-indigo-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden='true'
              />
              <span className='truncate'>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
        <div>
          <div className='shadow sm:rounded-md sm:overflow-hidden'>
            <div className='px-4 py-6 space-y-6 bg-white sm:p-6'>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Profile
                </h3>
                <p className='mt-1 text-sm text-gray-500'>Edit profile here.</p>
              </div>

              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-3'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Photo
                  </label>
                  <div className='flex items-center mt-1'>
                    <span className='inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full'>
                      <svg
                        className='w-full h-full text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                    </span>
                    <button
                      type='button'
                      className='px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Form
              onSubmit={onSubmit}
              initialValues={{
                ...formData,
              }}
              render={({ handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit}>
                  <div className='border-t-2 shadow sm:overflow-hidden'>
                    <div className='px-4 py-6 space-y-6 bg-white sm:p-6'>
                      <div className='grid grid-cols-4 gap-6 '>
                        <Field
                          name='name'
                          component='input'
                          placeholder='Enter First Name'>
                          {({ input, placeholder }) => (
                            <div className='col-span-6 sm:col-span-3'>
                              <div>
                                <label
                                  htmlFor='first-name'
                                  className='block text-sm font-medium text-gray-700'>
                                  Name
                                </label>
                                <input
                                  type='text'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                />
                              </div>
                            </div>
                          )}
                        </Field>
                        <Field
                          name='email'
                          component='input'
                          placeholder='Enter First Name'>
                          {({ input, placeholder }) => (
                            <div className='col-span-6 sm:col-span-3'>
                              <div>
                                <label
                                  htmlFor='first-name'
                                  className='block text-sm font-medium text-gray-700'>
                                  Email
                                </label>
                                <input
                                  type='text'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                />
                              </div>
                            </div>
                          )}
                        </Field>
                        <Field
                          name='password'
                          component='input'
                          placeholder='Enter New Password'>
                          {({ input, placeholder }) => (
                            <div className='col-span-6 sm:col-span-4'>
                              <div>
                                <label
                                  htmlFor='first-name'
                                  className='block text-sm font-medium text-gray-700'>
                                  Password
                                </label>
                                <input
                                  type='text'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                />
                              </div>
                            </div>
                          )}
                        </Field>
                        <Field
                          name='passwordConfirm'
                          component='input'
                          placeholder='Re-enter New Password'>
                          {({ input, placeholder }) => (
                            <div className='col-span-6 sm:col-span-4'>
                              <div>
                                <label
                                  htmlFor='first-name'
                                  className='block text-sm font-medium text-gray-700'>
                                  Confirm Password
                                </label>
                                <input
                                  type='text'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                />
                              </div>
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Update
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
        <div className='shadow sm:rounded-md sm:overflow-hidden'>
          <div className='px-4 py-6 mb-2 space-y-6 bg-white sm:p-6'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Account Actions
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Once you delete the account, it can never be recovered.
              </p>
            </div>

            <div className='flex justify-end'>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-transparent border-gray-500 rounded-md shadow-sm hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingContent;
