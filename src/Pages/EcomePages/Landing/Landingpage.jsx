import React from 'react'
import AgenciesHeader from '../../../components/EcomComponents/AgenciesHeader/AgenciesHeader'
import Banner from '../../../components/EcomComponents/Banner/Banner';
import Category from '../../../components/EcomComponents/Category/Category';
import Deals from '../../../components/EcomComponents/Deals/Deals';
import FeatureMarketContainer from '../../../components/EcomComponents/Feature/FeatureMarketContainer';
import HomePageNav from "../../../components/EcomComponents/Nav/HomePageNav";
import Shopping from '../../../components/EcomComponents/Shopping/Shopping';
import Trending from '../../../components/EcomComponents/ViewedToday/Ternding';

const Landingpage = () => {
    return (
        <div>
            <AgenciesHeader />
            <HomePageNav />
            <FeatureMarketContainer />
            <Trending section='trending' />
            <Shopping />
            <Category />
            <div className='mt-6 bg-[#149F76] p-3 text-center text-white'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facilis </h2>
            </div>
            <Deals />
            <Banner/>
        </div>
    )
}

export default Landingpage