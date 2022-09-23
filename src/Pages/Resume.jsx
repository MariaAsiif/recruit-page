import React from 'react'
import { ResumeBanner } from '../components/Banner/Banners'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'
import Detail from '../components/ResumeDetail/Detail'

const Resume = () => {
    return (
        <Layout>
            <ResumeBanner />
            <div className='lg:mt-[2rem] detail_page'>
                <Detail />
                <hr className='w-full mt-3' />
                <Footer />
            </div>
        </Layout>
    )
}

export default Resume