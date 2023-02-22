import React, { useState, useEffect } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom';

// import ShowUser from '../../components/UerShow/ShowUser';
import { callApi } from '../../utils/CallApi';
import { Truncate } from '../../utils/TrucateString';


import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import JobApplicants from '../../components/Popups/JobApplicantsPopup';

const AppliedAllJobs = () => {
    const [alljobs, setalljobs] = useState([])
    const [jobPopup, setjobPopup] = useState(false)
    const [approvedJob, setapprovedJob] = useState(false)
    const [jobId, setJobId] = useState("")
    const [applyJob, setapplyJob] = useState([])


    const openJobPopup = (e , data , jobid  ) => {
        e.stopPropagation()
        setjobPopup(true)
        setapplyJob(data )
        setJobId(jobid)
    }

 


 



    useEffect(() => {
        if (!jobPopup) {
            (async () => {
                try {
                    const payload = {
                        sortproperty: "created_at",
                        sortorder: -1,
                        offset: 0,
                        limit: 50
                    }
                    const response = await callApi("/jobs/listjobs", "post", payload)
                    const updatedjobs = response.data.jobs.map((job) => ({ ...job, isChecked: false }))
                    setalljobs(updatedjobs)
                } catch (error) {
                    console.log(error);
                }
            })();
        }

    }, [jobPopup])
    return (
        <div className='bscontainer-fluid'>
        <JobApplicants id="job-modal" data={applyJob} jobId={jobId}  modalOpen={jobPopup} onClose={() => setjobPopup(false)} />
        {/* <JobApplicants id="job-modal" data={applyJob}   modalOpen={approvedJob} onClose={() => setapprovedJob(false)} /> */}
          
            <div className='row py-5'>
                <div className='col-12  mb-5'>
                    <div className='mb-3'>
                        <ul className="inline-flex flex-wrap text-sm font-medium">
                            <li className="flex items-center">
                                <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                </svg>
                            </li>
                            <li className="flex items-center">
                                <Link to="/jobs" className="text-slate-500 hover:text-indigo-500" href="#0">Jobs</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <Link to="create-job" className="p-2 flex w-[13%] items-center rounded-sm bg-red-500 hover:bg-green-600 text-white" >
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Create Job</span>
                    </Link> */}
                </div>
                <div className='col-12 border'>
                    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                        <header className="px-5 py-4">
                            <h2 className="font-semibold text-slate-800">All Applied Jobs <span className="text-slate-400 font-medium">{alljobs.length}</span></h2>
                        </header>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                                        <tr>
                                            {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                <div className="flex items-center">
                                                    <label className="inline-flex">
                                                        <span className="sr-only">Select all</span>
                                                        <input name="allSelect" checked={!alljobs.some((job) => !job.isChecked)} onChange={handleChange} className="form-checkbox" type="checkbox" />
                                                    </label>
                                                </div>
                                            </th> */}
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">JOB ID</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">JOB TITLE</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">SALARY</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">DESCRIPTION</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">JobType</div>
                                            </th>
                                            {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Job Status</div>
                                            </th> */}
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Job Class</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Expiry Date</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Employeer</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Applicants</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Approved Applicants</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-slate-200">
                                        {alljobs.map((job) => {
                                            return (
                                                <tr key={job._id}>
                                                    {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                        <div className="flex items-center">
                                                            <label className="inline-flex">
                                                                <span className="sr-only">Select</span>
                                                                <input id={job._id} onChange={handleChange} name={job._id} checked={job?.isChecked || false} className="form-checkbox" type="checkbox" />
                                                            </label>
                                                        </div>
                                                    </td> */}
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job._id}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.job_title}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.salary}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{Truncate(job.description, 40)}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.jobtype}</div>
                                                    </td>
                                                    {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.jobstatus}</div>
                                                    </td> */}
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.jobclass}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{moment(job.expiryDate).format('MM/DD/YYYY')}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.employer}</div>
                                                    </td>
                                                    <td>
                                                        <div className='flex justify-center items-center'>
                                                            {job.approved === "approved" || job.approved === "disapproved" ?
                                                                <button
                                                                    className={job.approved === "approved" ? 'p-2 rounded-md border-green-600 border text-green-600' : 'p-2 rounded-md border-red-600 border text-red-600'}
                                                                // onClick={() => {
                                                                //   handleApproved(job._id, false);
                                                                // }}
                                                                >
                                                                    <span className='ml-2'>{job.approved}</span>
                                                                </button>

                                                                :
                                                                <>
                                                                    <div onClick={(e) => openJobPopup(e , job?.applicants , job._id)} className=' cursor-pointer rounded-full w-[30px] h-[30px] border-2 p-[2px] border-red-600  flex justify-center'>
                                                                        <IoEyeOutline className='text-red-600 hover:text-red-600' size={23} />
                                                                    </div>
                                                                    {/* <div onClick={() => ApprovePopup({ status: 'approved', id: job._id })} className=' cursor-pointer rounded-full w-[30px] h-[30px] border-2 pt-1 border-green-600  flex justify-center'>
                                                                        <FiCheck className='text-[18px] text-green-600' />
                                                                    </div>
                                                                    <div onClick={() => ApprovePopup({ status: 'disapproved', id: job._id })} className=' cursor-pointer rounded-full w-[30px] h-[30px] border-2 pt-1 border-red-600 mx-2 flex justify-center'>
                                                                        <MdClose className='text-[18px] text-red-600' />
                                                                    </div> */}
                                                                </>
                                                            }
                                                        </div>
                                                    </td>

                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                        <div className="space-x-1 flex justify-center">

                                                            <div className=' cursor-pointer rounded-full w-[30px] h-[30px] border-2 p-[2px] border-green-600  flex justify-center'>
                                                                <IoEyeOutline className='text-green-600 hover:text-green-600' size={23} />
                                                            </div>

                                                            {/* <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openJobPopup(e, "view", job)}>
                                                                <IoEyeOutline className='text-red-500 hover:text-green-600' size={23} />
                                                            </button> */}

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
            </div>


            {/* <button onClick={(e) => { e.stopPropagation(); setshowUser(true); setUserType('edit') }}>Show</button>
            <button onClick={(e) => { e.stopPropagation(); setviewUser(true); setUserType('view') }}>View </button> */}
            {/* <ViewJob permition={showUser} toggle={(value) => setshowUser(value)} title={"View"} />
            <EditJob permition={viewUser} toggle={(value) => setviewUser(value)} title={"Edit a Job"} /> */}

            {/* {showUser && <ShowUser show={showUser} setShow={("")} title={showUser} />} */}
        </div>
    )
}

export default AppliedAllJobs