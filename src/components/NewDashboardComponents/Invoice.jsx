import React from 'react'

import { GoCheck } from "react-icons/go";
const Invoice = () => {
    return (
        <div >
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='p-5 mb-4 bg-white rounded-2xl'>
                <div className='row'>
                    <div className='col-lg-2 text-[#707070] font-semibold'>Earnings</div>
                    <div className='col-lg-10'>
                        <div className='p-4 mt-8 text-center rounded-xl row g-0'>
                            <div className='col-lg-3 col-6'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Total Invoice</h1>
                                <h1 className='text-[#4DA676] font-bold font-sans'>$13250</h1>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Overdue</h1>
                                <h1 className='text-[#E84125] font-bold font-sans'>$13250</h1>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Paid</h1>
                                <h1 className='text-[#5D89ED] font-bold font-sans'>$13250</h1>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Unpaid</h1>
                                <h1 className='text-[#4DA676] font-bold font-sans'>$13250</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[50vh] overflow-y-auto p-5 bg-white rounded-2xl'>
                <div className='mb-3 row'>
                    <div className='col-lg-3  text-[#707070] font-semibold'>
                        Invoice
                    </div>
                    <div className='flex flex-col items-center justify-end gap-2 lg:flex-row col-lg-9'>
                        <div>
                            <GoCheck size={28} className='inline mr-2 last:mr-2 rounded-sm p-1 bg-[#4DA676] text-white ' />
                            <GoCheck size={28} className='inline mr-2 last:mr-2 rounded-sm p-1 bg-[#4DA676] text-white ' />
                            <GoCheck size={28} className='inline mr-2 last:mr-2 rounded-sm p-1 bg-[#4DA676] text-white ' />
                            <GoCheck size={28} className='inline mr-2 last:mr-2 rounded-sm p-1 bg-[#4DA676] text-white ' />
                        </div>
                        <div className='flex'>
                            <div className="flex justify-center mr-3">
                                <div>
                                    <div className="relative dropdown">
                                        <button className=" dropdown-toggle px-3 py-2  border border-[#4DA676]  text-[#4DA676] font-medium text-xs leading-tight rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Month
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /> </svg>
                                        </button>
                                        <ul className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <span className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100" href="#">Action</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center ">
                                <div>
                                    <div className="relative dropdown">
                                        <button className=" dropdown-toggle px-3 py-2  border border-[#4DA676]  text-[#4DA676] font-medium text-xs leading-tight rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            All Invoice
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />  </svg>
                                        </button>
                                        <ul className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                                            <li>
                                                <span className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"  >Action</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto ">
                        <div className="inline-block min-w-full ">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead style={{ boxShadow: "2px 3px 10px #7777771A" }}>
                                        <tr  >
                                            {Array(6).fill("").map(() => {
                                                return (
                                                    <th scope="col" className="px-6 py-2 text-sm font-semibold text-left font-sans text-[#464A53]"> Invoice </th>
                                                )
                                            })}

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array(6).fill("").map(() => {
                                            return (
                                                <tr style={{ boxShadow: "2px 3px 10px #7777771A" }}  >
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        Test
                                                    </td>

                                                    {Array(5).fill("").map(() => {
                                                        return (
                                                            <td className="px-6 py-4 text-sm font-medium text-[#ABAFB3] whitespace-nowrap"> Mark </td>
                                                        )
                                                    })}

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Invoice