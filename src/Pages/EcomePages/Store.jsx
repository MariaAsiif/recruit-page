import React from 'react'
import Benefits from '../../components/EcomComponents/StoreComp/Benefits'
// import Header from '../../components/EcomComponents/StoreComp/Header'
import Shop from '../../components/EcomComponents/StoreComp/Shop'
import StoreSlider from '../../components/EcomComponents/StoreComp/StoreSlider'
import UniqueCloth from '../../components/EcomComponents/StoreComp/UniqueCloth'
import TopHeader from '../../components/EcomComponents/TopHeader/TopHeader'
import FollowUs from '../../components/FollowUs/FollowUs'
import Footer from '../../components/Footer/Footer'
import CategoryLists from '../../components/EcomComponents/StoreComp/CategoryLists'
import Deals from '../../components/EcomComponents/StoreComp/Deals'
import StoreHeader from '../../components/EcomComponents/StoreComp/StoreHeader'
const Store = () => {
    return (
        <div className='overflow-hidden'>
            <TopHeader />
            <StoreHeader />
            <StoreSlider />
            <Benefits />
            <UniqueCloth />
            <Shop />
            <CategoryLists />
            <Deals />

            <FollowUs />
            <Footer />

        </div>
    )
}

export default Store