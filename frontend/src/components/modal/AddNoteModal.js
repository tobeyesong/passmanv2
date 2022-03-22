/** @format */

import { Fragment, useState, useRef, useEffect } from "react";

//Final Form
import { Form, Field } from "react-final-form";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../actions/noteActions";
import { NOTE_CREATE_RESET } from "../../constants/noteConstants";
import { getUserDetails } from "../../actions/userActions";
import { useNavigate, Link, useParams } from "react-router-dom";

const required = (value) => (value ? undefined : "Required");

const AddNoteModal = () => {
  const dispatch = useDispatch();
  const noteId = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const noteCreate = useSelector((state) => state.noteCreate);

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const { success: successNoteCreate, note: createdNote } = noteCreate;
  const noteDetails = useSelector((state) => state.noteDetails);
  const { note } = noteDetails;

  useEffect(() => {
    dispatch({ type: NOTE_CREATE_RESET });
    dispatch(getUserDetails("profile"));
    // console.log(user._id);
    if (successNoteCreate) {
      navigate("/");
    }
  }, [dispatch, noteId, note, successNoteCreate, createdNote, user, navigate]);

  if (!open) {
    navigate("/");
  }

  const onSubmit = (values) => {
    dispatch(createNote(values));
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
                      Add a Secure Note
                    </h3>
                    <hr />

                    <Form
                      onSubmit={onSubmit}
                      render={({ handleSubmit, submitError }) => (
                        <form onSubmit={handleSubmit}>
                          <div className='space-y-6'>
                            <div className='px-4 py-5 bg-white shadow lg:rounded-b-md sm:rounded-b-md sm:p-6'>
                              <div className='md:grid md:grid-cols-3 md:gap-6'>
                                <div className='md:col-span-1'>
                                  <Field
                                    name='title'
                                    component='input'
                                    placeholder='Enter Name for This Note'
                                    validate={required}>
                                    {({ input, meta, placeholder }) => (
                                      <div className='col-span-6 sm:col-span-3'>
                                        <div>
                                          <label
                                            htmlFor='first-name'
                                            className='block font-medium text-gray-700 text-md'>
                                            Title
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
                                    <div className='flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md'>
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
                                              name='noteImage'
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
                                <div className='pb-6 mt-5 md:mt-0 md:col-span-2'>
                                  <Field
                                    name='caption'
                                    component='textarea'
                                    placeholder='Enter a Caption for This Note'
                                    className='block w-full p-2 border border-gray-300 rounded-md shadow-sm h-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                    validate={required}
                                  />
                                </div>
                              </div>
                              <hr />
                              <div className='flex justify-end pt-5'>
                                <Link
                                  to='/notes'
                                  type='button'
                                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                  Cancel
                                </Link>
                                <button
                                  type='submit'
                                  className='inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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

export default AddNoteModal;
