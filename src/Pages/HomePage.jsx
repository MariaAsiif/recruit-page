import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Carrier from '../components/Carrier'
import Faqs from '../components/Faqs/Faqs'
import FollowUs from '../components/FollowUs/FollowUs'
import Footer from '../components/Footer/Footer'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import JobHuntStats from '../components/JobHuntStats/JobHuntStats'
import Layout from '../components/Layout/Layout'
import Opertunity from '../components/Opertunity'
import AgeGatePopup from '../components/Popups/AgeGatePopup'
import Recuiter from '../components/Recuit'
import Standard from '../components/Standard'
import SubscribeNewsLetter from '../components/SubscribeNewsLetter/SubscribeNewsLetter'
import Support from '../components/Support/Support'

const HomePage = () => {
    const [showAgeGatePopup, setshowAgeGatePopup] = useState(false)
    // useEffect(() => {
    //     setshowAgeGatePopup(true)
    // }, [])
    return (
        <Layout>
            {showAgeGatePopup ? (<AgeGatePopup isOpen={showAgeGatePopup} onClose={() => { setshowAgeGatePopup(false) }} />) : null}

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
                <Footer />
            </div>
        </Layout>

    )
}

export default HomePage