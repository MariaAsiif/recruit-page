import React from 'react'

const AppliedJobs = () => {
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
                                <tr className='text-[#999FA9]'>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">#34534</div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">34534</div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">34534</div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">34534</div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">34534</div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">34534</div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="text-left">34534</div>
                                    </td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppliedJobs