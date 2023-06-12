import React from 'react'
import BuyerLayout from '../../../components/buyerComponents/Layout/BuyerLayout'
import BuyerCategory from '../../../components/buyerComponents/BuyerCategory'
import Browsing from '../../../components/buyerComponents/Browsing'
import FeatureMarketContainer from '../../../components/buyerComponents/Feature/FeatureMarketContainer'
import Banner from '../../../components/buyerComponents/Banner'
import Brand from '../../../components/buyerComponents/Brand'
import HireTalent from '../../../components/buyerComponents/HireTalent'

const BuyerLandig = () => {
    return (
        <BuyerLayout>
            <Banner />
            <BuyerCategory />
            <Browsing />
            <Brand />
            <FeatureMarketContainer />
            <HireTalent/>
        </BuyerLayout>
    )
}

export default BuyerLandig