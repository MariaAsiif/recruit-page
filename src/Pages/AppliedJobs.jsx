import React,{useEffect , useState} from 'react'
import ActiveJobs from '../components/AppliedJob/ActiveJobs'
import RecommendedJobs from '../components/AppliedJob/RecommendedJobs'
import { callApi } from '../utils/CallApi'

const AppliedJobs = () => {
    const [activeJob , setActiveJobs] = useState([])
    const [loader , setLoader] = useState(false)


    const status = [
        { name: "Pending", color: "yellow" },
        { name: "Accepted", color: "green" },
        { name: "Rejected", color: "red" },
        { name: "On the way", color: "gray" },]


        const getActiveJobs = async () => {
            try {
                let payload = {
    
                    "sortproperty": "created_at",
                    "sortorder": -1,
                    "offset": 0,
                    "limit": 50,
                    "query": {
                        "critarion": { "jobawarded": false },
                        "applicantsFields": "_id email first_name",
                        "approvedApplicants": "_id email first_name",
                        "selectedApplicant": "_id email first_name",
                        "interviews": "",
                        "addedby": "_id email first_name",
    
                        "lastModifiedBy": "_id email first_name"
                    }
    
                }
                setLoader(true)
                let res = await callApi('/jobs/getAllJobsWithFullDetails', 'post', payload)
                setActiveJobs(res?.data?.jobs)
                setLoader(false)
            }
            catch (err) { }
        }

       

        useEffect(() =>{
            getActiveJobs()
        },[])



    return (
        <div className='bscontainer-fluid h-full py-5 px-5'>
            <ActiveJobs status={activeJob} load={loader} />
            <RecommendedJobs />
        </div>
    )
}

export default AppliedJobs