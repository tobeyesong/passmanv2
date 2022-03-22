/** @format */

import React from "react";
import { CollectionIcon } from "@heroicons/react/outline";

const Loader = () => {
  return (
    <div className='flex justify-center '>
      <CollectionIcon className='w-10 h-10 animate-pulse' />
    </div>
  );
};

export default Loader;
