import React from 'react'
import Banner from '../../components/EcomComponents/LandingComp/Banner/Banner';
import Category from '../../components/EcomComponents/LandingComp/Category/Category';
import Deals from '../../components/EcomComponents/LandingComp/Deals/Deals';
import FeatureMarketContainer from '../../components/EcomComponents/LandingComp/Feature/FeatureMarketContainer';
import News from '../../components/EcomComponents/LandingComp/News/News';
import Products from '../../components/EcomComponents/LandingComp/Products/Products';
import Sales from '../../components/EcomComponents/LandingComp/Sales/Sales';
import Shopping from '../../components/EcomComponents/LandingComp/Shopping/Shopping';
import HempProduct from '../../components/EcomComponents/LandingComp/TopCategory/HempProduct';
import TrustedSuppliers from '../../components/EcomComponents/LandingComp/TrustedSuppliers/TrustedSuppliers';
import Trending from '../../components/EcomComponents/LandingComp/ViewedToday/Ternding';
import interOrg1 from "../../assets/landingImages/interOrg1.svg";
import interOrg2 from "../../assets/landingImages/interOrg2.svg";
import interOrg3 from "../../assets/landingImages/interOrg3.svg";
import interOrg4 from "../../assets/landingImages/interOrg4.svg";
import interOrg5 from "../../assets/landingImages/interOrg5.svg";
import Layout from '../../components/EcomComponents/Layout/Layout';
import ViewedToday from '../../components/LandingPageComponents/Homepage2/ViewedToday/ViewedToday';
const Landingpage = () => {
    const trustedOrganizations = [
        interOrg1,
        interOrg2,
        interOrg3,
        interOrg4,
        interOrg5,
        interOrg1,
      ];

    return (
        <Layout homenav={false}>
            <FeatureMarketContainer />
            <HempProduct />
            <Trending section='trending' />
            <Shopping />
            <Category />
            <ViewedToday/> 
            <div className='mt-6 bg-[#149F76] p-3 text-center text-white'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facilis </h2>
            </div>
            <Deals />
            <Banner />
            <Products />
            <ViewedToday/> 

            <News />
            <Sales />
            <TrustedSuppliers imgs={trustedOrganizations}/>
        </Layout>
    )
}

export default Landingpage