import React from 'react'
import AgenciesHeader from '../../../components/EcomComponents/AgenciesHeader/AgenciesHeader'
import FeatureMarketContainer from '../../../components/EcomComponents/Feature/FeatureMarketContainer';
import HomePageNav from "../../../components/EcomComponents/Nav/HomePageNav";

const Landingpage = () => {
    return (
        <div>
            <AgenciesHeader />
            <HomePageNav/>
            <FeatureMarketContainer/>
        </div>
    )
}

export default Landingpage