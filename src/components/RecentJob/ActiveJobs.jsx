import React from 'react'

const ActiveJobs = ({ status }) => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-12 flex items-end px-10 mb-5'>
                    <div className='w-[90%]'>
                        <h1 className='text-[#0D1829] font-semibold mb-2'>Active Jobs</h1>
                        <h1 className='text-[#626973] text-xs font-normal'>Based on your preferences</h1>
                    </div>

                    <div className="text-center w-[10%]">
                        <div className="dropdown relative">
                            <button className=" dropdown-toggle px-5 shadow-2xl w-full justify-between py-2 bg-white  text-[#626973] font-medium text-[11px] leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out  flex items-center  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                FILTER
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-3 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"  ></path> </svg>
                            </button>
                            <ul className=" dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-center font-medium rounded-lg shadow-2xl mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Cancel</span>
                                </li>
                                <li>
                                    <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#E84025] hover:bg-gray-100 " >Cancel Request</span>
                                </li>
                                <li>
                                    <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Details</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='col-g-12 '>
                    <div className="overflow-x-auto bg-white rounded-md">
                        <table className="table-auto w-full ">
                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-slate-500  border-b border-slate-200">
                                <tr className='text-[#626973]'>

                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div className="font-semibold text-left">Job ID <span className='text-[23px] align-bottom text-red-600'>•</span>  </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-center">Job Title <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-center">Company Name <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Job Type <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Application Date <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Status <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Action <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                    </th>

                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm ">
                                {status.map((status) => {
                                    return (
                                        <tr className='text-[#999FA9] cursor-pointer hover:border-[#65A33A] hover:border hover:rounded-md '>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">#34534</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className='flex justify-center items-center'>
                                                    <img className=' w-full h-auto max-w-[30px] rounded-md' src={"http://placekitten.com/100/100"} alt="logo" loading="lazy" />
                                                    <h1 className='font-semibold text-[#626973] ml-2'>UI/UX DESIGNER</h1>
                                                </div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center">
                                                    <img className=' w-full h-auto max-w-[20px] rounded-full inline-block mr-2' src={"http://placekitten.com/100/100"} alt="logo" loading="lazy" />
                                                    Google
                                                </div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">Full Time</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">02 September 22</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className={`border border-${status.color}-500  bg-${status.color}-50   text-${status.color}-500 px-2 py-2 text-center font-semibold rounded-md`}>{status.name}</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center ">
                                                    <div className="dropdown relative">
                                                        <button className="dropdown-toggle px-2 text-[#E84025] font-medium text-lg leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out   " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> ... </button>
                                                        <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-center font-medium rounded-lg shadow-2xl mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                                            <li>
                                                                <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Cancel</span>
                                                            </li>
                                                            <li>
                                                                <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#E84025] hover:bg-gray-100 " >Cancel Request</span>
                                                            </li>
                                                            <li>
                                                                <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Details</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                        <div className='px-8 my-6 flex justify-between items-center'>
                            <div className='w-[70%]'>
                                <h1 className='text-[#999FA9] text-xs'>Showing 04-12 of 29</h1>
                            </div>
                            <div className='w-[20%]'>
                                <div className=' flex justify-end'>
                                    <div className='w-[40%] '>Prev</div>
                                    <div className='w-[20%] text-[#E84025]'>01</div>
                                    <div className='w-[20%]'>02</div>
                                    <div className='w-[20%]'>05</div>
                                    <div className='w-[40%] text-right text-[#E84025]'>Next</div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ActiveJobs