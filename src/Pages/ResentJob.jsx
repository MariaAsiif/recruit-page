import React, { useState, useEffect } from 'react'
import JobHistoryTable from '../components/RecentJob/JobHistoryTable'
import FavouriteJobs from '../components/RecentJob/FavouriteJobs'
import { callApi } from '../utils/CallApi'
import { useSelector } from 'react-redux'
import { RecruitPage } from './RecruitPage'
const ResentJob = () => {

    const user = useSelector((state) => state.recruitAuth?.userInfo)

    const [jobs, setJobs] = useState([])
    const [apply, setApply] = useState(false)
    const [JobId, setJobId] = useState('')
    const [savedjobs, setSavedJobs] = useState([])


    const getActiveJobs = async () => {
        try {
            let payload = {

                "sortproperty": "created_at",
                "sortorder": -1,
                "offset": 0,
                "limit": 50,
                "query": {
                    "critarion": { "jobawarded": true },
                    "applicantsFields": "_id email first_name",
                    "approvedApplicants": "_id email first_name",
                    "selectedApplicant": "_id email first_name",
                    "interviews": "",
                    "addedby": "_id email first_name",

                    "lastModifiedBy": "_id email first_name"
                }

            }
            let res = await callApi('/jobs/getAllJobsWithFullDetails', 'post', payload)
            setJobs(res?.data?.jobs)
        }
        catch (err) { }
    }

    let fetch = async () => {
        let payload =
        {
            "userid": user._id,
            "savedJobsFields": ""
        }

        try {
            let res = await callApi('/jobs/getSavedJobs', 'post', payload)
            setSavedJobs(res.data)
            console.log("saved job", res)
        }
        catch (err) { }
    }


    useEffect(() => {
        getActiveJobs()
        fetch()

    }, [apply])


    return (
        <div className='bscontainer-fluid h-full py-5 px-5'>
            {
                apply ?
                    <RecruitPage setApply={setApply} type="applied" id={JobId} />
                    :
                    <>
                        <JobHistoryTable status={jobs} />
                        <FavouriteJobs jodId={setJobId} setApply={setApply} status={savedjobs} />
                    </>
            }
        </div>
    )
}

export default ResentJob