import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// import axios from 'axios'
import { Link } from 'react-router-dom';
// import { IoEyeOutline } from 'react-icons/io5';
import ViewEditEmployer from '../../components/Popups/ViewEditEmployer';
import EditDeleteButton from '../../components/EditDeleteButton/EditDeleteButton';
import { callApi } from '../../utils/CallApi';
import DeletePopup from '../../components/deletePopups/DeletePopups';
import { toast } from 'react-toastify';
const Department = () => {
    const token = useSelector((state) => state.userAuth.loginInfo.token);
    const [alljobs, setalljobs] = useState([])
    const [jobPopup, setjobPopup] = useState(false)
    const [jobMode, setjobMode] = useState("view")
    const [jobRow, setjobRow] = useState({})
    const [delPopup, setDelPopup] = useState(false)
    const [delId, setDelId] = useState('')

    const openJobPopup = (e, mode, data) => {
        e.stopPropagation()
        setjobPopup(true)
        setjobMode(mode)
        setjobRow(data)
    }


    const deletePopToggle = (id) => {
        setDelId(id)
        setDelPopup(true)
    }

    const deleteInspire = async () => {
        let value = {
            id: delId
        }
        try {
            const res = await callApi("/quotes/removeQuote", "post", value)
            if (res.status === "Success") {
                toast.success(res.message);
                setDelPopup(false)
                let oldinspires = alljobs
                const updatedInspires = oldinspires.filter((inspire) => inspire._id !== res.data._id)
                setalljobs(updatedInspires)
            }
            else {
                toast.error(res.message);

            }
        } catch (error) {

        }
    }

    useEffect(() => {
        (async () => {
            try {
                const payload = {

                    "sortproperty": "created_at",
                    "sortorder": -1,
                    "offset": 0,
                    "limit": 50,
                    "query": {
                        "critarion": { "active": true },
                        "employeeFields": "_id email first_name",
                        "addedby": "_id email first_name",
                        "departmentHead": "_id email first_name",
                        "lastModifiedBy": "_id email first_name"
                    }

                }
                let response = await callApi('/departmens/getDepartmentsWithFullDetails', 'post', payload)

                setalljobs(response.data.departments)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [token])
    return (
        <div className='bscontainer-fluid'>
            <ViewEditEmployer id="job-modal" data={jobRow} mode={jobMode} modalOpen={jobPopup} onClose={() => setjobPopup(false)} />
            {delPopup && <DeletePopup permition={delPopup} callback={deleteInspire} Toggle={() => setDelPopup(false)} />}
            <div className='row py-5'>
                <div className='col-12  mb-5'>
                    <div className='mb-3'>
                        <ul className="inline-flex flex-wrap text-sm font-medium">
                            <li className="flex items-center">
                                <Link to="/dashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                </svg>
                            </li>
                            <li className="flex items-center">
                                <Link to="/department" className="text-slate-500 hover:text-indigo-500" href="#0">Department</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="create-candidate" className="p-2 bg-red-500 hover:bg-green-600 rounded-sm text-white flex w-[20%] items-center" >
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Create Department</span>
                    </Link>
                </div>
                <div className='col-12 border'>
                    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                        <header className="px-5 py-4">
                            <h2 className="font-semibold text-slate-800">All Department <span className="text-slate-400 font-medium">{alljobs.length}</span></h2>
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
                                                <div className="font-semibold text-left">DEPARTMENT NAME</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">HEAD OF DEPARTMENT</div>
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
                                        {alljobs?.map((job, i) => {
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
                                                        <div className="text-left">{job.description}</div>
                                                    </td>


                                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                        <EditDeleteButton
                                                            moduleName="Manage I Inspire"
                                                            data={job}
                                                            showPopup={openJobPopup}
                                                            deleteToggle={deletePopToggle}
                                                            delePopup={deleteInspire} />
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

export default Department