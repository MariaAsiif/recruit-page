import React from 'react'

const AppliedJobs = () => {
    const status = [
        { name: "Pending", color: "yellow" },
        { name: "Accepted", color: "green" },
        { name: "Rejected", color: "red" },
        { name: "On the way", color: "gray" },]
    return (
        <div className='bscontainer h-screen py-5'>
            <div className='row'>
                <div className='col-g-12'>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white rounded-md">
                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-slate-500  border-b border-slate-200">
                                <tr className='text-[#626973]'>

                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <span className="font-semibold text-left">Job ID</span>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Job Title</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Company Name</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Job Type</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Application Date</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Status</div>
                                    </th>
                                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="font-semibold text-left">Action</div>
                                    </th>

                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm divide-y divide-slate-200">
                                {status.map((status) => {
                                    return (
                                        <tr className='text-[#999FA9]'>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">#34534</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className='flex place-items-center'>
                                                    <img className=' w-full h-auto max-w-[30px] rounded-md' src={"http://placekitten.com/100/100"} alt="logo" loading="lazy" />
                                                    <h1 className='font-semibold text-[#626973] ml-2'>UI/UX DESIGNER</h1>
                                                </div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">
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
                                                        <button className=" dropdown-toggle px-2 text-[#626973] font-medium text-lg leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out   " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> ... </button>
                                                        <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-center font-medium rounded-lg shadow-2xl mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppliedJobs