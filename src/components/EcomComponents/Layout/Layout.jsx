import React from 'react'
import FollowUs from '../../FollowUs/FollowUs'
import Footer from '../../Footer/Footer'
import AgenciesHeader from '../AgenciesHeader/AgenciesHeader'
import TopHeader from '../TopHeader/TopHeader'
import HomePageNav from '../Nav/HomePageNav'
import HomeNav from '../HomeNav/HomeNav'
const Layout = ({ children }, homeNav) => {
    
    console.log("homeNav" , homeNav)
    return (
        <>
            <TopHeader />
            <AgenciesHeader />
            <HomePageNav />
            {homeNav === false ? <HomeNav /> : null}
            {
                children
            }
            <FollowUs />
            <Footer />
        </>
    )
}

export default Layout