import React, { useState, useEffect } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom';

// import ShowUser from '../../components/UerShow/ShowUser';
import { callApi } from '../../utils/CallApi';
import { Truncate  } from '../../utils/TrucateString';

import ViewEditJobPopup from '../../components/Popups/ViewEditJobPopup';

import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer } from 'react-toastify';

const Jobs = () => {
    const [alljobs, setalljobs] = useState([])
    const [showUser, setshowUser] = useState(false)
    const [viewUser, setviewUser] = useState(false)
    const [userType, setUserType] = useState('')
    const [jobPopup, setjobPopup] = useState(false)
    const [jobMode, setjobMode] = useState("view")
    const [jobRow, setjobRow] = useState({})

    const openJobPopup = (e, mode, data) => {
        e.stopPropagation()
        setjobPopup(true)
        setjobMode(mode)
        setjobRow(data)
    }

    const deletejob = async () => {
        try {
            const response = await callApi("")
        } catch (error) {

        }
    }

    // const [selectedjobs, setselectedjobs] = useState([])

    // const handleChange = (e) => {
    //     const { name, checked } = e.target;
    //     if (name === 'allSelect') {
    //         let tempUser = alljobs.map((job) => {
    //             return { ...job, isChecked: checked };
    //         });
    //         setalljobs(tempUser);
    //         if (e.target.checked) {
    //             setselectedjobs(tempUser)
    //         }
    //         else {
    //             setselectedjobs([])
    //         }

    //     } else {
    //         let tempUser = alljobs.map((job) =>
    //             job._id === name ? { ...job, isChecked: checked } : job
    //         );
    //         setalljobs(tempUser);
    //         if (e.target.checked) {

    //             console.log("checked");
    //             let oldselectedjobssss = alljobs.find((sjob) => sjob._id === name)
    //             setselectedjobs((prevjob) => ([
    //                 ...prevjob,
    //                 oldselectedjobssss
    //             ]))
    //         }
    //         else {
    //             console.log("unchecked");
    //             let oldselectedjobs = selectedjobs.filter((sjob) => sjob._id !== name)
    //             setselectedjobs(oldselectedjobs)
    //         }
    //     }
    // };


    

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ViewEditJobPopup id="job-modal" data={jobRow} mode={jobMode} modalOpen={jobPopup} onClose={() => setjobPopup(false)} />
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
                    <Link to="create-job" className="p-2 flex w-[13%] items-center rounded-sm bg-red-500 hover:bg-green-600 text-white" >
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Create Job</span>
                    </Link>
                </div>
                <div className='col-12 border'>
                    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                        <header className="px-5 py-4">
                            <h2 className="font-semibold text-slate-800">All Jobs <span className="text-slate-400 font-medium">{alljobs.length}</span></h2>
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
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Job Status</div>
                                            </th>
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
                                                <div className="font-semibold text-left">Actions</div>
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
                                                        <div className="text-left">{Truncate(job.description , 40)}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.jobtype}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.jobstatus}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.jobclass}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{moment(job.expiryDate).format('MM/DD/YYYY')}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.employer}</div>
                                                    </td>

                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                        <div className="space-x-1">
                                                            <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openJobPopup(e, "edit", job)}>
                                                                <span className="sr-only">Edit</span>
                                                                <svg className="w-8 h-8 fill-current text-red-500 hover:text-green-600" viewBox="0 0 32 32">
                                                                    <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                                                                </svg>
                                                            </button>
                                                            <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openJobPopup(e, "view", job)}>
                                                                <IoEyeOutline className='text-red-500 hover:text-green-600' size={23} />
                                                            </button>
                                                            <button onClick={deletejob} className="text-rose-500 hover:text-rose-600 rounded-full">
                                                                <span className="sr-only">Delete</span>
                                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                    <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                                                                    <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                                                                </svg>
                                                            </button>
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

export default Jobs