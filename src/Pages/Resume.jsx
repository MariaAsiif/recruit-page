import React from 'react'
import { ResumeBanner } from '../components/Banner/Banners'
import Footer from '../components/Footer/Footer'
import Detail from '../components/ResumeDetail/Detail'

const Resume = () => {
    return (
        <div>
            <ResumeBanner />
            <div className='lg:mt-[2rem] detail_page'>
                <Detail />
                <hr className='w-full mt-3' />
                <Footer />
            </div>
        </div>
    )
}

export default Resume