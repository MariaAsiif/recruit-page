import React, { useState, useRef, useEffect } from "react";
import Transition from "../../../utils/Transition";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import uk from "../../../assets/images/u_k.png";
const TopHeader = () => {
  const options = [
    {
      id: 0,
      period: "English",
    },
    {
      id: 1,
      period: "Spanish",
    },
    {
      id: 0,
      period: "English",
    },
    {
      id: 1,
      period: "Spanish",
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
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="bg-[#707070] lg:h-[40px] lg:p-0 pb-2 hidden lg:block md:block">
        <div className="bscontainer">
          <div className="row">
            <div className="col-lg-4">
              <ul className="flex items-center h-full">
                <li className=" border-r border-gray-400  px-2 h-[40px] pt-[10px]">
                  <div className="flex items-center">
                    <FiPhone className="text-white" />
                    <h2 className="text-[14px] text-white px-1">
                      +203-333-422-3333
                    </h2>
                  </div>
                </li>
                <li>
                  <div className="flex items-center pl-2">
                    <HiOutlineMailOpen className="text-white" />
                    <h2 className="text-[14px] text-white px-1">
                      info@helpdesk.com
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="flex justify-end">
                <ul className="flex items-center ">
                  <li className=" border-r border-gray-400  px-2 h-[40px] pt-[10px]">
                    <h2 className="text-[14px] text-white ">Track my order</h2>
                  </li>
                  <li className="border-r border-gray-400  px-2 h-[40px] pt-[10px]">
                    <h2 className="text-[14px] text-white px-1">Doller($)</h2>
                  </li>
                  <li className="px-2 border-r border-gray-400">
                    <div className="relative">
                      <button
                        ref={trigger}
                        className="flex items-center justify-between p-2 text-white"
                        aria-label="Select date range"
                        aria-haspopup="true"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                      >
                        <span className="flex items-center">
                          <img src={uk} alt="uk" className="w-8" />
                          <span className="px-2 text-[14px]">
                            {options[selected].period}
                          </span>
                        </span>
                        <svg
                          className="ml-1 text-white fill-current shrink-0"
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                        >
                          <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                        </svg>
                      </button>
                      <Transition
                        show={dropdownOpen}
                        tag="div"
                        className="z-10 absolute top-full right-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                        enter="transition ease-out duration-100 transform"
                        enterStart="opacity-0 -translate-y-2"
                        enterEnd="opacity-100 translate-y-0"
                        leave="transition ease-out duration-100"
                        leaveStart="opacity-100"
                        leaveEnd="opacity-0"
                      >
                        <div
                          ref={dropdown}
                          className="text-sm font-medium text-slate-600 "
                          onFocus={() => setDropdownOpen(true)}
                          onBlur={() => setDropdownOpen(false)}
                        >
                          {options.map((option) => {
                            return (
                              <button
                                key={option.id}
                                tabIndex="0"
                                className={`flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${
                                  option.id === selected && "text-red-500"
                                }`}
                                onClick={() => {
                                  setSelected(option.id);
                                  setDropdownOpen(false);
                                }}
                              >
                                <svg
                                  className={`shrink-0 mr-2 fill-current text-red-500 ${
                                    option.id !== selected && "invisible"
                                  }`}
                                  width="12"
                                  height="9"
                                  viewBox="0 0 12 9"
                                >
                                  <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                                </svg>
                                <span>{option.period}</span>
                              </button>
                            );
                          })}
                        </div>
                      </Transition>
                    </div>
                  </li>
                  <li className="px-2 ">
                    <h2 className="text-[14px] text-white px-1">
                      Register / Login
                    </h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
