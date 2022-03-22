/** @format */

import { Fragment, useState, useRef } from "react";
import { Navigate } from "react-router-dom";

import { Form, Field } from "react-final-form";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import DatePicker from "react-date-picker";

const required = (value) => (value ? undefined : "Required");

const AddAddressModal = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState();
  const cancelButtonRef = useRef(null);
  const [dateValue, onChange] = useState(new Date());
  if (!open) {
    return <Navigate to='/' />;
  }

  const onSubmit = (values) => {
    console.log(values);
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
                    <h3 className='p-2 space-y-8 text-lg font-medium leading-6 text-gray-800 bg-yellow-500 border-gray-300 divide-y divide-gray-200 shadow-sm border-3 rounded-t-md sm:space-y-5'>
                      Add an Address
                    </h3>

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
                      render={({ handleSubmit, submitError }) => (
                        <form onSubmit={handleSubmit}>
                          <div className='space-y-6'>
                            <div className='px-4 py-5 bg-white border-gray-100 shadow sm:overflow-hidden border-1 lg:rounded-b-md sm:rounded-b-md rounded-b-md sm:p-6'>
                              <div className='md:grid md:grid-cols-3 md:gap-6 '>
                                <div className='col-span-1 '>
                                  <Field
                                    name='name'
                                    component='input'
                                    placeholder='Enter Name for This Address'
                                    validate={required}>
                                    {({ input, meta, placeholder }) => (
                                      <div className='col-span-6 sm:col-span-3'>
                                        <div>
                                          <label
                                            htmlFor='first-name'
                                            className='block font-medium text-gray-700 text-md'>
                                            Name
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

                                  <div className='pt-3'>
                                    <label className='block font-medium text-gray-700 text-md'>
                                      Attachments
                                    </label>
                                    <div className='flex justify-center px-6 pt-5 pb-6 mt-1 border border-gray-300 border-dashed rounded-md'>
                                      <div className='space-y-1 text-center'>
                                        <svg
                                          className='w-12 h-12 mx-auto text-gray-400'
                                          stroke='currentColor'
                                          fill='none'
                                          viewBox='0 0 48 48'
                                          aria-hidden='true'>
                                          <path
                                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                            strokeWidth={2}
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                          />
                                        </svg>
                                        <div className='flex text-sm text-gray-600'>
                                          <label
                                            htmlFor='file-upload'
                                            className='relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                                            <span>Upload a file</span>
                                            <input
                                              id='file-upload'
                                              name='file-upload'
                                              type='file'
                                              className='sr-only'
                                            />
                                          </label>
                                          <p className='pl-1'>
                                            or drag and drop
                                          </p>
                                        </div>
                                        <p className='text-xs text-gray-500'>
                                          PNG, JPG, GIF up to 10MB
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* ///////////////////////////Information Fill Out/////////////////////// */}

                                <div className='col-span-1 pb-6 mt-5 md:mt-0 md:col-span-2 '>
                                  <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <div className='overflow-hidden shadow sm:rounded-md'>
                                      <div className='px-4 py-5 bg-white sm:p-6'>
                                        <div className='grid grid-cols-6 gap-6 md:col-span-1'>
                                          <div className='block col-span-6 text-xl underline sm:col-span-6 lg:col-span-6'>
                                            Basic Information
                                          </div>
                                          <div className='col-span-6 sm:col-span-3'>
                                            <Field
                                              name='firstName'
                                              component='input'
                                              placeholder='First Name'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      First Name
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                          <div className='col-span-6 sm:col-span-3'>
                                            <Field
                                              name='lastName'
                                              component='input'
                                              placeholder='Last Name'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-1 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      Last Name
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                          <div className='col-span-6 sm:col-span-4'>
                                            <Field
                                              name='email'
                                              component='input'
                                              placeholder='E-mail Address'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      E-mail Address
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                          <div className='col-span-6 sm:col-span-3'>
                                            <label
                                              htmlFor='country'
                                              className='block text-sm font-medium text-gray-700'>
                                              Country / Region
                                            </label>
                                            <select
                                              id='country'
                                              name='country'
                                              autoComplete='country'
                                              className='block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                                              <option>United States</option>
                                              <option>Canada</option>
                                              <option>Mexico</option>
                                            </select>
                                          </div>
                                          <div className='col-span-6'>
                                            <Field
                                              name='street'
                                              component='input'
                                              placeholder='Street Address'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      Street Address
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                          <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                                            <Field
                                              name='city'
                                              component='input'
                                              placeholder='City'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      City
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                          <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                                            <Field
                                              name='state'
                                              component='input'
                                              placeholder='State/Province'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      State/Province
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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
                                          <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                                            <Field
                                              name='zip'
                                              component='input'
                                              placeholder='ZIP / Postal'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      ZIP/Postal
                                                    </label>
                                                    <input
                                                      type='text'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
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

                                          <div className='col-span-6 sm:col-span-4'>
                                            <Field
                                              name='phone'
                                              component='input'
                                              placeholder='Enter Phone Number'
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <div>
                                                    <label
                                                      htmlFor='first-name'
                                                      className='block font-medium text-gray-700 text-md'>
                                                      Phone Number
                                                    </label>
                                                    <PhoneInput
                                                      type='text'
                                                      defaultCountry='US'
                                                      {...input}
                                                      placeholder={placeholder}
                                                      value={value}
                                                      onChange={setValue}
                                                    />
                                                  </div>
                                                </div>
                                              )}
                                            </Field>
                                          </div>

                                          {/* //DATEPICKER */}

                                          <div className='col-span-6 sm:col-span-4'>
                                            <Field
                                              name='birtday'
                                              component='input'
                                              placeholder=''
                                              validate={required}>
                                              {({
                                                input,
                                                meta,
                                                placeholder,
                                              }) => (
                                                <div className='col-span-6 sm:col-span-3'>
                                                  <label
                                                    htmlFor='country'
                                                    className='block text-sm font-medium text-gray-700'>
                                                    Birthday
                                                  </label>
                                                  <div className='col-span-6'>
                                                    <DatePicker
                                                      className='block w-full px-4 py-2 pl-1 mb-2 border border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
                                                      onChange={onChange}
                                                      value={dateValue}
                                                    />
                                                  </div>
                                                </div>
                                              )}
                                            </Field>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className='flex justify-end pt-5'>
                                <button
                                  type='button'
                                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                  Cancel
                                </button>
                                <button
                                  type='submit'
                                  className='inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                  Save
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

export default AddAddressModal;
