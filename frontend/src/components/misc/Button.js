/** @format */

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/react/outline";

import { Popover, Transition } from "@headlessui/react";

import {
  // MapIcon,
  FingerPrintIcon,
  PaperClipIcon,
} from "@heroicons/react/outline";

const solutions = [
  {
    name: "Add Password",
    link: "/passwords/add",
    icon: FingerPrintIcon,
  },
  {
    name: "Add Notes",
    link: "/add/note",
    icon: PaperClipIcon,
  },
  // {
  //   name: "Add Addresses",
  //   link: "/add/address",
  //   icon: MapIcon,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = () => {
  return (
    <Popover className='realtive '>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group p-3 m-4 mb-20 mr-4 z-40 bg-yellow-500  fixed bottom-0 right-0  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
            )}>
            <PlusSmIconOutline
              className='w-8 h-8 text-white'
              aria-hidden='true'
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'>
            <Popover.Panel className='absolute bottom-0 right-0 z-40 pb-4 pr-4 '>
              <div className='overflow-hidden rounded-lg shadow-lg'>
                <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      type='button'
                      className='flex items-start p-2 -m-3 transition duration-150 ease-in-out rounded-lg '>
                      <item.icon
                        className='flex-shrink-0 w-6 h-6 text-blue-600'
                        aria-hidden='true'
                      />
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Button;
