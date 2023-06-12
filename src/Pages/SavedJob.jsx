import React, { useEffect ,useState } from 'react'
import JobHistoryTable from '../components/RecentJob/JobHistoryTable'
import { callApi } from '../utils/CallApi'
import { useSelector } from 'react-redux'
const SavedJobs = () => {

    const [saved, setSaved] = useState([])
    const [reload, setReload] = useState("")
    const user = useSelector((state) => state.recruitAuth?.userInfo)


    useEffect(() => {
        let fetch = async () => {
            let payload =
            {
                "userid": user._id,
                "savedJobsFields": ""
            }

            try {
                let res = await callApi('/jobs/getSavedJobs', 'post', payload)
                setSaved(res.data)
                setReload('')
            }
            catch (err) { }
        }
        fetch()
    }, [reload !== ""])


    return (
        <div className='bscontainer-fluid h-full py-5 px-5'>
            <JobHistoryTable setReload={setReload} type="saved" status={saved} />
        </div>
    )
}

export default SavedJobs