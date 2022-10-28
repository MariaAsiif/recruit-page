import React from 'react'
import AgenciesHeader from '../../../components/EcomComponents/AgenciesHeader/AgenciesHeader'
import FeatureMarketContainer from '../../../components/EcomComponents/Feature/FeatureMarketContainer';
import HomePageNav from "../../../components/EcomComponents/Nav/HomePageNav";
import Shopping from '../../../components/EcomComponents/Shopping/Shopping';
import Trending from '../../../components/EcomComponents/ViewedToday/Ternding';

const Landingpage = () => {
    return (
        <div>
            <AgenciesHeader />
            <HomePageNav/>
            <FeatureMarketContainer/>
            <Trending   section='trending'/>
            <Shopping/>
        </div>
    )
}

export default Landingpage