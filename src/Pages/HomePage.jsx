import React from 'react'
import Banner from '../components/Banner/Banner'
import Carrier from '../components/Carrier'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import JobHuntStats from '../components/JobHuntStats/JobHuntStats'
import Opertunity from '../components/Opertunity'
import Recuiter from '../components/Recuit'
import Standard from '../components/Standard'

const HomePage = () => {
    return (
        <>
            <Banner />
            <div className='mb-4'>
                <Standard />
                <Opertunity />
                <Carrier />
                <Recuiter />
                <HowItWorks />
                <JobHuntStats />
            </div>
        </>

    )
}

export default HomePage