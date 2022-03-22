/** @format */
import React from "react";
import { useRef, useState, useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, useParams, useNavigate } from "react-router-dom";
import { deleteNote } from "../../actions/noteActions";
import { NOTE_DELETE_RESET } from "../../constants/noteConstants";

import StandardModal from "./StandardModal";

const DeleteNoteModal = ({ history }) => {
  const dispatch = useDispatch();
  const noteId = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    // loading: loadingDelete,
    // error: errorDelete,
    success: successDelete,
  } = noteDelete;
  const noteDetails = useSelector((state) => state.noteDetails);
  const { note } = noteDetails;

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: NOTE_DELETE_RESET });
      navigate("/");
    }
  }, [dispatch, history, noteId, note, successDelete, navigate]);

  if (!open) {
    return <Navigate to='/' />;
  }

  const deleteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  const actions = (
    <React.Fragment>
      <button
        type='button'
        className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
        onClick={() => deleteHandler(noteId.id)}>
        Delete
      </button>
      <Link
        to='/notes'
        type='button'
        className='inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
        onClick={() => setOpen(false)}
        ref={cancelButtonRef}>
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <StandardModal
        title='Delete Password'
        content='Are you sure you want to delete this note?'
        actions={actions}
      />
    </div>
  );
};

export default DeleteNoteModal;
