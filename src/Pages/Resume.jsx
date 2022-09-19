import React from 'react'
import JoinUsBanner from '../components/Banner/JoinUsBanner'
import Footer from '../components/Footer/Footer'
import Detail from '../components/ResumeDetail/Detail'

const Resume = () => {
    return (
        <div>
            <JoinUsBanner bg={"resume-background"}/>
            <div className='mt-[2rem]'>
                <Detail />
                <hr className='w-full mt-3'/>
                <Footer />
            </div>
        </div>
    )
}

export default Resume