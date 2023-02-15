import React from 'react'
import JobHistoryTable from '../components/RecentJob/JobHistoryTable'
import FavouriteJobs from '../components/RecentJob/FavouriteJobs'
const ResentJob = () => {
    const status = [
        { name: "Pending", color: "yellow" },
        { name: "Accepted", color: "green" },
        { name: "Rejected", color: "red" },
        { name: "On the way", color: "gray" },]
    return (
        <div className='bscontainer-fluid h-full py-5 px-5'>
            <JobHistoryTable status={status} />
            <FavouriteJobs status={status} />
        </div>
    )
}

export default ResentJob