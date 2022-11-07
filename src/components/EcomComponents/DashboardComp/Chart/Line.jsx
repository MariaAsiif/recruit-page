import React, { useState, useEffect, useRef } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Transition from '../../../../utils/Transition';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const fake = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fake2 = [2, 6, 4, 8, 3, 9, 12, 14, 17]
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: fake.map((f) => f),
            borderColor: '#24D29F',
            backgroundColor: '#24D29F',
        },
        {
            label: 'Dataset 2',
            data: fake2.map((f) => f),
            borderColor: '#0B694D',
            backgroundColor: '#0B694D',
        },
    ],
};


const optionss = [
    {
        id: 0,
        period: 'Nov 2022'
    },
    {
        id: 1,
        period: 'Nov 2022'
    },
    {
        id: 2,
        period: 'Nov 2022'
    },
   

];




const LineChart = ({ type }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(1);

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
        <>

            <div className='bscontainer mt-6 mb-6 '>
                <div className="border shadow-lg pb-2">
                    <div className='border-b flex justify-between p-4'>
                        <h2 className='font-semibold pt-2 '>Resent Items Sales</h2>
                        <div className='flex justify-between'>
                            {!type === "total" &&
                                <div className='flex items-center '>
                                    <span className='w-4 h-4   rounded-full inline-block bg-[#24D29F] mr-1 align-middle'></span>
                                    <h2 className='text-[14px] font-medium'>Daily Sales</h2>
                                    <span className='w-4 h-4 mx-1  rounded-full inline-block bg-[#DB3C23] mr-1 align-middle'></span>
                                    <h2 className='text-[14px] font-medium'>Daily Views</h2>
                                </div>
                            }

                            <div className='ml-8 mr-2'>
                                <div className="relative">
                                    <button
                                        ref={trigger}
                                        className="p-2  flex items-center rounded-md  justify-between text-black   border"
                                        aria-label="Select date range"
                                        aria-haspopup="true"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        aria-expanded={dropdownOpen}
                                    >
                                        <span className="flex items-center ">
                                            <span className='px-2 text-[14px]'>{optionss[selected].period}</span>
                                        </span>

                                        <svg className="shrink-0 ml-1 fill-current text-black" width="11" height="7" viewBox="0 0 11 7">
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
                                            className="font-medium text-sm text-slate-600 "
                                            onFocus={() => setDropdownOpen(true)}
                                            onBlur={() => setDropdownOpen(false)}
                                        >
                                            {
                                                optionss.map(option => {
                                                    return (
                                                        <button
                                                            key={option.id}
                                                            tabIndex="0"
                                                            className={`flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${option.id === selected && 'text-red-500'}`}
                                                            onClick={() => { setSelected(option.id); setDropdownOpen(false); }}
                                                        >
                                                            <svg className={`shrink-0 mr-2 fill-current text-red-500 ${option.id !== selected && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                                                                <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                                                            </svg>
                                                            <span >{option.period}</span>
                                                        </button>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Transition>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-4'>
                        <Line options={options} data={data} />
                    </div>
                    <div className='flex justify-around items-center '>
                        <div className='text-center'>
                            <h2 className='text-[#24D29F] font-semibold text-[25px]'>478</h2>
                            <p className='text-[14px] font-medium'>Total Sales This Month</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-[#24D29F] font-semibold text-[30px]'>478</h2>
                            <p className='text-[14px] font-medium'>Total Sales This Month</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-[#24D29F] font-semibold text-[25px]'>478</h2>
                            <p className='text-[14px] font-medium'>Total Sales This Month</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default LineChart