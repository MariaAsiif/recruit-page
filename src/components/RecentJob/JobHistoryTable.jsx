import React, { useEffect, useState } from 'react'
import { callApi } from '../../utils/CallApi'
import moment from 'moment/moment'
// import { callApi } from '../../utils/CallApi'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../Redux/RecruitAuthSlice/RecruitAuthSlice'
import { toast } from 'react-toastify'
// import JObDetail from '../Popups/JobDetail'
import SavedJobs from '../Popups/SavedJobs'
// import { toast } from 'react-toastify'

const JobHistoryTable = ({ status, type, setReload }) => {

    // const [jobs, setJobs] = useState([])

    const user = useSelector((state) => state.recruitAuth?.userInfo)
    const [jobData, setJobData] = useState({})
    const [ sidebar , setSetSidebar] = useState(false)

    const dispatch = useDispatch()

    const handleCancelReq = async (id) => {
        let filterJobs = user?.savedJobs.filter((job) => { return job !== id })
        let payload = {
            // "_id": user?._id,
            savedJobs: filterJobs
        }

        let res = await callApi('/users/update-profile', 'post', payload)
        if (res.status === "Success") {
            toast.success("Job are cancelled")
            setReload(filterJobs)
            dispatch(updateProfile(res.data))
        }
        else {
            toast.error(res.message)
        }


    }


    // const getActiveJobs = async () => {
    //     try {
    //         let payload = {

    //             "sortproperty": "created_at",
    //             "sortorder": -1,
    //             "offset": 0,
    //             "limit": 50,
    //             "query": {
    //                 "critarion": { "jobawarded": true },
    //                 "applicantsFields": "_id email first_name",
    //                 "approvedApplicants": "_id email first_name",
    //                 "selectedApplicant": "_id email first_name",
    //                 "interviews": "",
    //                 "addedby": "_id email first_name",

    //                 "lastModifiedBy": "_id email first_name"
    //             }

    //         }
    //         let res = await callApi('/jobs/getAllJobsWithFullDetails', 'post', payload)
    //         setJobs(res?.data?.jobs)
    //     }
    //     catch (err) { }
    // }


    // useEffect(() => {
    //     getActiveJobs()
    // }, [])


    return (
        <>

            <div className=" ">
                <SavedJobs id="job-modal" data={jobData} modalOpen={sidebar} onClose={() => setSetSidebar(false)} />
            </div>

            <div className='row'>
                <div className='col-lg-12 flex justify-between items-end  mb-5'>
                    <div className='lg:w-[90%]'>
                        <h1 className='text-[#0D1829] text-[16px] font-semibold mb-2'>{type === "saved" ? "Saved Jobs" : "Job History"}</h1>
                        <h1 className='text-[#626973] text-[14px] text-xs font-normal'>Based on your preferences</h1>
                    </div>

                    {/* <div className="text-center lg:w-[10%]">
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
                    </div> */}

                </div>
                <div className='col-g-12 '>
                    <div className="overflow-x-auto bg-white rounded-md">
                        {
                            status.length > 0 ?
                                <>
                                    <table className="table-auto w-full ">
                                        {/* Table header */}
                                        <thead className="text-xs font-semibold uppercase text-slate-500  border-b border-slate-200">
                                            <tr className='text-[#626973]'>

                                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                    <div className="font-semibold text-left">Job ID <span className='text-[23px] align-bottom text-red-600'>•</span>  </div>
                                                </th>
                                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Job Title <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
                                                </th>
                                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Company Name <span className='text-[23px] align-bottom text-red-600'>•</span> </div>
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
                                            {status && status.length > 0 ? status.map((item, i) => {
                                                return (
                                                    <tr className='text-[#999FA9] cursor-pointer hover:bg-[#dffdc9] ' key={i}>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className="text-left">{item._id}</div>
                                                        </td>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className='flex justify-start items-center'>
                                                                <img className=' w-full h-auto max-w-[30px] rounded-md' src={`${item.job_image_url}`} alt="logo" loading="lazy" />
                                                                <h1 className='font-semibold text-[#626973]  ml-2'>{item?.job_title}</h1>
                                                            </div>
                                                        </td>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className="text-left">
                                                                {/* <img className=' w-full h-auto max-w-[20px] rounded-full inline-block mr-2' src={"http://placekitten.com/100/100"} alt="logo" loading="lazy" /> */}
                                                                {item?.employer}
                                                            </div>
                                                        </td>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className="text-left">{item?.jobtype}</div>
                                                        </td>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className="text-left">{moment(item?.created_at).format('ll')}</div>
                                                        </td>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className={`border border-${"green"}-500  bg-${"green"}-50   text-${"green"}-500 px-2 py-2 text-center font-semibold rounded-md`}
                                                            // onClick={() => ChangStatus(status.name)}
                                                            >{item?.jobstatus}</div>
                                                        </td>
                                                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                            <div className="text-center ">
                                                                <div className="dropdown relative">
                                                                    <button className="dropdown-toggle px-1 rounded-[50%] bg-[#E84025] text-white focus:outline-none focus:ring-0   transition duration-150 ease-in-out   " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" ></path>
                                                                        </svg>
                                                                    </button>
                                                                    <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-center font-medium rounded-lg shadow-2xl mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                                                        {/* <li>
                                                                            <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Cancel</span>
                                                                        </li> */}
                                                                        <li onClick={() => handleCancelReq(item?._id)}>
                                                                            <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#E84025] hover:bg-gray-100 " >Cancel Request</span>
                                                                        </li>
                                                                        <li onClick={() =>{return  setSetSidebar(true) , setJobData(item)}}>
                                                                            <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Details</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                                : null
                                            }


                                        </tbody>
                                    </table>

                                    <div className='px-8 my-6 flex justify-between items-center'>
                                        <div className='lg:w-[70%] w-full'>
                                            <h1 className='text-[#999FA9] text-xs'>Showing 04-12 of 29</h1>
                                        </div>
                                        <div className='lg:w-[20%] w-full'>
                                            <div className=' flex justify-end'>
                                                <div className='mx-2 text-[15px]'>Prev</div>
                                                <div className=' text-[#E84025] text-[15px]'>01</div>
                                                <div className=' mx-2 text-gray-300 text-[15px] '> - 02</div>
                                                <div className='text-gray-300 text-[15px] '> - 05</div>
                                                <div className=' mx-2 text-right text-[#E84025] text-[15px]'>Next</div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                                :
                                <div className='p-5 '>
                                    <h2>Record not found</h2>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default JobHistoryTable