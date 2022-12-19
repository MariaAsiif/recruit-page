import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import ViewEditEmployer from '../../components/Popups/ViewEditEmployer';
const Designation = () => {
    const token = useSelector((state) => state.userAuth.loginInfo.token);
    const [alljobs, setalljobs] = useState([])
    const [jobPopup, setjobPopup] = useState(false)
    const [jobMode, setjobMode] = useState("view")
    const [jobRow, setjobRow] = useState({})

    const openJobPopup = (e, mode, data) => {
        e.stopPropagation()
        setjobPopup(true)
        setjobMode(mode)
        setjobRow(data)
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
        (async () => {
            try {
                const config = {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                };
                let response = await axios.post('http://localhost:5873/employees/getEmployees', {
                    sortproperty: "created_at",
                    sortorder: -1,
                    offset: 0,
                    limit: 50
                }, config);

                console.log("rs", response)

                const updatedjobs = response.data.data.jobs.map((job) => ({ ...job, isChecked: false }))
                setalljobs(updatedjobs)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [token])
    return (
        <div className='bscontainer-fluid'>
            <ViewEditEmployer id="job-modal" data={jobRow} mode={jobMode} modalOpen={jobPopup} onClose={() => setjobPopup(false)} />
            <div className='row py-5'>
                <div className='mb-3'>
                    <ul className="inline-flex flex-wrap text-sm font-medium">
                        <li className="flex items-center">
                            <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >dashboard </Link>
                            <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                            </svg>
                        </li>
                        <li className="flex items-center">
                            <Link to="/designation" className="text-slate-500 hover:text-indigo-500" href="#0">designation</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-12  mb-5'>
                    <Link to="create-candidate" className="p-2 flex w-[20%] items-center rounded-sm bg-red-500 hover:bg-green-600 text-white" >
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Create Designation</span>
                    </Link>
                </div>
                <div className='col-12 border'>
                    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                        <header className="px-5 py-4">
                            <h2 className="font-semibold text-slate-800">All Designation <span className="text-slate-400 font-medium">{alljobs.length}</span></h2>
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
                                                <div className="font-semibold text-left">ID</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">DESIGNATION NAME</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">ADDED BY</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">DESCRIPTION </div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Actions</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-slate-200">
                                        {alljobs.map((job, i) => {
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
                                                        <div className="text-left">{job.salary}</div>
                                                    </td>
                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                        <div className="text-left">{job.description}</div>
                                                    </td>


                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                        <div className="space-x-1">
                                                            <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openJobPopup(e, "edit", job)}>
                                                                <span className="sr-only">Edit</span>
                                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                    <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                                                                </svg>
                                                            </button>
                                                            <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openJobPopup(e, "view", job)}>
                                                                <IoEyeOutline className='text-red-500 hover:text-green-600' size={23} />

                                                                {/* <img src={viewSvg} className="w-6 h-7" alt='delete' /> */}
                                                                {/* <span className="sr-only">Show</span>
                                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                    <path d="M16 20c.3 0 .5-.1.7-.3l5.7-5.7-1.4-1.4-4 4V8h-2v8.6l-4-4L9.6 14l5.7 5.7c.2.2.4.3.7.3zM9 22h14v2H9z" />
                                                                </svg> */}
                                                            </button>
                                                            <button className="text-rose-500 hover:text-rose-600 rounded-full">
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



        </div>
    )
}

export default Designation