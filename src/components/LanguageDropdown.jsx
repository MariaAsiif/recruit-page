import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
// import profileImage from '../images/people.png'
import flag from '../assets/images/usflag_logo.png'

function LanguageDropdown({type}) {


  const options = [
    {
      id: 0,
      period: 'Edit Profile'
    },
    {
      id: 1,
      period: 'Settings'
    },
    {
      id: 2,
      period: 'Help Center'
    },
    {
      id: 3,
      period: 'Logout'
    },

  ];



  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(2);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <button
        ref={trigger}
        className={`px-1 py-1 ${type ? 'w-[220px]' : 'w-[105px]'}  text-[14px] flex items-center border rounded-full  justify-between  bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600`}
        aria-label="Select date range"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >

        <span className="flex items-center">
          <img src={flag} className="w-5" alt="profile" />
          <span className='ml-1 text-[12px] font-medium'>English</span>
        </span>
        
        {/* <img src={profileImage} className=" w-8" alt="profile" />
        <span>{options[selected].period}</span> */}
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className="z-10 absolute top-full right-0 w-full bg-white border-slate-200  shadow-lg overflow-hidden "
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="font-medium text-sm text-slate-600 w-full "
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className={``}>

            <input type="text" className={`border  ${type ? 'w-full':  'w-[105px]' } focus:outline-none` }/>
          </div>

          {
            options.map(option => {
              return (
                <div>
                  <span className={`flex items-start justify-start border-b last:border-b-0 w-full hover:bg-slate-50 py-1 text-[14px] font-normal px-2 cursor-pointer }`}>
                    <img src={flag} className="w-5" alt="profile" />
                    <span className='ml-1 text-[12px]'>English</span>
                  </span>
                </div>
                // <button
                //   key={option.id}
                //   tabIndex="0"
                //   className={`flex items-center justify-center border-b last:border-b-0 w-full hover:bg-slate-50 py-2 text-[14px] font-normal px-3 cursor-pointer }`}
                // >
                //   <span className='text-center' >{option.period}</span>
                // </button>
              )
            })
          }
        </div>
      </Transition>
    </div>
  );
}

export default LanguageDropdown;
