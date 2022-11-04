import React from 'react'
import FollowUs from '../../FollowUs/FollowUs'
import Footer from '../../Footer/Footer'
import AgenciesHeader from '../AgenciesHeader/AgenciesHeader'
import TopHeader from '../TopHeader/TopHeader'
import HomePageNav from '../Nav/HomePageNav'
const Layout = ({ children }) => {
    return (
        <>
            <TopHeader />
            <AgenciesHeader />
            <HomePageNav />
            {
                children
            }
            <FollowUs />
            <Footer />
        </>
    )
}

export default Layout