import React from 'react'
import { FcCheckmark } from 'react-icons/fc';

export const renderCustomInput = ({ ref , data }) => (
    <div className='relative cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          data
            ? `${data.year}/${data.month}/${data.day}`
            : ''
        }
        className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `}
      />
      <div className={`visible absolute top-3 cursor-pointer right-5`}>
        {' '}
        <FcCheckmark />
      </div>
    </div>
  );


