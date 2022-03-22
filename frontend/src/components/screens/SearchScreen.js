/** @format */
/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../navbar/Sidebar";

import { useSelector } from "react-redux";

import {
  TrashIcon,
  PencilIcon,
  ChevronDoubleUpIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/outline";
//algoliasearch
import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox, Hits, Index } from "react-instantsearch-dom";
import axios from "axios";
import Title from "../misc/Title";

const searchClient = algoliasearch(
  "51L3TF5D2J",
  "b83bce23652e1fc9111bb1b4859cb712"
);
const passwordIndex = searchClient.initIndex("passwordsMERN");
const noteIndex = searchClient.initIndex("notesMERN");

const SearchScreen = () => {
  const [passwords, setPasswords] = useState([]);
  const [notes, setNotes] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //Retreive Passwords from API
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const fetchPasswords = async () => {
      const { data } = await axios.get("/api/passwords", config);
      data.forEach((password) => {
        password.objectID = password._id;
        delete password._id;
      });
      setPasswords(data);
    };
    fetchPasswords();
  }, [userInfo]);

  //Record Password in Algolia Index
  passwordIndex.saveObjects(passwords);

  //Retreive Notes from API
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const fetchNotes = async () => {
      const { data } = await axios.get("/api/notes", config);
      data.forEach((note) => {
        note.objectID = note._id;
        delete note._id;
      });
      setNotes(data);
    };
    fetchNotes();
  }, [userInfo]);

  //Record Note in Algolia Index
  noteIndex.saveObjects(notes);

  return (
    <div className='relative flex flex-1 h-screen overflow-hidden bg-gray-100'>
      <Sidebar />

      <div className='flex flex-col flex-1 w-0 overflow-auto'>
        <InstantSearch indexName='passwordsMERN' searchClient={searchClient}>
          <div className='app'>
            <div className=''>
              <div className='flex'>
                <Link
                  to='/'
                  className='inline-flex items-center px-4 text-gray-500 transition duration-200 ease-in transform border-r border-gray-200 shadow-lg focus:shadow-inner rounded-l-md focus:outline-none md:hidden'>
                  <ArrowNarrowLeftIcon
                    className='items-center w-6 h-6'
                    aria-hidden='true'
                  />
                </Link>
                <SearchBox
                  className='w-full '
                  autoFocus
                  translations={{
                    placeholder: "Search Everything",
                  }}
                />
              </div>

              <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='max-w-5xl mx-auto'>
                  <Title title='Passwords' />
                  <Index indexName='passwordsMERN'>
                    <Hits hitComponent={allPasswords} />
                  </Index>
                  <Title title='Notes' />
                  <Index indexName='notesMERN'>
                    <Hits hitComponent={allNotes} />
                  </Index>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

function allPasswords({ hit }) {
  return (
    <ul className='grid grid-cols-1 gap-5 mt-3 mb-3 overflow-auto sm:gap-6 group'>
      <div className='border-r-4 rounded-md hover:border-yellow-400'>
        <li className='flex col-span-1 rounded-md shadow-sm'>
          <img
            alt='logo '
            src={`https://logo.clearbit.com/${hit.url}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://media.publit.io/file/MiscPasswordIcon.svg";
            }}
            className='flex items-center flex-shrink-0 object-contain text-sm font-medium text-white shadow-sm w-14 rounded-l-md'
          />

          <div className='flex flex-row-reverse items-center flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md'>
            <div className='flex-1 px-4 py-2 text-sm truncate'>
              <a
                href={hit.href}
                className='font-medium text-gray-900 hover:text-gray-600'>
                {hit.username}
              </a>
              <p className='text-gray-500 '>{hit.url}</p>
            </div>
            <div className='absolute flex-shrink-0 m-2 transform scale-0 group-hover:scale-100 '>
              <a
                href={`https://${hit.url}`}
                className='inline-flex items-center justify-center w-8 h-8 mr-1 text-gray-400 bg-transparent bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none '>
                <ChevronDoubleUpIcon
                  className='w-5 h-5 text-gray-400 rounded hover:bg-blue-700 hover:text-gray-100'
                  aria-hidden='true'
                />
              </a>
              <Link
                to={`/password/${hit.objectID}/edit`}
                type='button'
                className='inline-flex items-center justify-center w-8 h-8 mr-1 text-gray-400 bg-transparent bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none '>
                <PencilIcon
                  className='w-5 h-5 text-gray-400 rounded hover:bg-gray-800 hover:text-gray-100'
                  aria-hidden='true'
                />
              </Link>
              <Link
                to={`/password/${hit.objectID}/delete`}
                type='button'
                className='inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none '>
                <TrashIcon
                  className='w-5 h-5 text-gray-400 rounded hover:bg-red-600 hover:text-gray-100'
                  aria-hidden='true'
                />
              </Link>
            </div>
          </div>
        </li>
      </div>
    </ul>
  );
}

function allNotes({ hit }) {
  return (
    <ul className='grid grid-cols-1 gap-5 mt-3 mb-3 overflow-auto sm:gap-6 group'>
      <div className='border-r-4 rounded-md hover:border-yellow-400'>
        <li className='flex col-span-1 border-4 rounded-md shadow-sm border-gray-50'>
          <img
            alt='logo'
            src='https://media.publit.io/file/noun-triangle.svg'
            className='flex items-center flex-shrink-0 object-contain text-sm font-medium text-white shadow-sm w-14 rounded-l-md' //media.publit.io/file/triangle/orangeTriangle.svg","
          />

          <div className='flex flex-row-reverse items-center flex-1 truncate bg-white border-t border-b border-r border-blue-200 rounded-r-md'>
            <div className='flex-1 px-4 py-2 text-sm truncate'>
              {hit.title}
              <p className='text-gray-500 truncate h-11 '>{hit.caption}</p>
            </div>
            <div className='absolute flex-shrink-0 m-2 transform scale-0 group-hover:scale-100 '>
              <Link
                to={`/note/${hit.objectID}/edit`}
                type='button'
                className='inline-flex items-center justify-center w-8 h-8 mr-1 text-gray-400 bg-transparent bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none '>
                <PencilIcon
                  className='w-5 h-5 text-gray-400 rounded hover:bg-gray-800 hover:text-gray-100'
                  aria-hidden='true'
                />
              </Link>
              <Link
                to={`/note/${hit.objectID}/delete`}
                type='button'
                className='inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-gray-100 rounded-full hover:text-gray-500 focus:outline-none '>
                <TrashIcon
                  className='w-5 h-5 text-gray-400 rounded hover:bg-red-600 hover:text-gray-100'
                  aria-hidden='true'
                />
              </Link>
            </div>
          </div>
        </li>
      </div>
    </ul>
  );
}

export default SearchScreen;
