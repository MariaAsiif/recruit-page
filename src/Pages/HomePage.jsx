import React from 'react'
import Banner from '../components/Banner/Banner'
import Carrier from '../components/Carrier'
import Faqs from '../components/Faqs/Faqs'
import FollowUs from '../components/FollowUs/FollowUs'
import Footer from '../components/Footer/Footer'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import JobHuntStats from '../components/JobHuntStats/JobHuntStats'
import Opertunity from '../components/Opertunity'
import Recuiter from '../components/Recuit'
import Standard from '../components/Standard'
import SubscribeNewsLetter from '../components/SubscribeNewsLetter/SubscribeNewsLetter'
import Support from '../components/Support/Support'

const HomePage = () => {
    return (
        <>
            <Banner />
            <div >
                <Standard />
                <Opertunity />
                <Carrier />
                <Recuiter />
                <HowItWorks />
                <JobHuntStats />
                <Faqs />
                <Support />
                <SubscribeNewsLetter />
                <FollowUs />
                <Footer/>
            </div>
        </>

    )
}

export default HomePage