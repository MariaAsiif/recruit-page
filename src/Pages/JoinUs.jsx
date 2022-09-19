import React from 'react'
import JoinUsBanner from '../components/Banner/JoinUsBanner'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import HringProcess from '../components/Hiring/HringProcess'
import SearchFilter from '../components/SearchJobs/SearchFilter'
import WorkUs from '../components/WorkWithUs/WorkUs'

const JoinUs = () => {
    return (
        <div>
            <JoinUsBanner />
            <div className='mt-[1rem]'>
                <HringProcess />
                <SearchFilter/>
                <Experience/>
                <WorkUs/>
                <Footer/>
            </div>

        </div>
    )
}

export default JoinUs