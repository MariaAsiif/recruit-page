import React from 'react'
import ActiveJobs from '../components/RecentJob/ActiveJobs'
import FavritJobs from '../components/RecentJob/FavritJobs'

const ResentJob = () => {
    const status = [
        { name: "Pending", color: "yellow" },
        { name: "Accepted", color: "green" },
        { name: "Rejected", color: "red" },
        { name: "On the way", color: "gray" },]
    return (
        <div className='bscontainer-fluid h-full py-5 px-5'>
            <ActiveJobs status={status} />
            <FavritJobs status={status} />
        </div>
    )
}

export default ResentJob