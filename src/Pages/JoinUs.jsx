import React from 'react'
import { JoinUsBanner } from '../components/Banner/Banners'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import HringProcess from '../components/Hiring/HringProcess'
import Layout from '../components/Layout/Layout'
import SearchFilter from '../components/SearchJobs/SearchFilter'
import WorkUs from '../components/WorkWithUs/WorkUs'

const JoinUs = () => {
    return (
        <Layout>
            <div className='joinus_wrapper'>
                <JoinUsBanner />
                <div className='mt-[1rem]'>
                    <HringProcess />
                    <SearchFilter />
                    <Experience />
                    <WorkUs />
                    <Footer />
                </div>

            </div>
        </Layout>
    )
}

export default JoinUs