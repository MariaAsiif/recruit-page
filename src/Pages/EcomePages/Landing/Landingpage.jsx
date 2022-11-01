import React from 'react'
import AgenciesHeader from '../../../components/EcomComponents/AgenciesHeader/AgenciesHeader'
import Banner from '../../../components/EcomComponents/Banner/Banner';
import Category from '../../../components/EcomComponents/Category/Category';
import Deals from '../../../components/EcomComponents/Deals/Deals';
import FeatureMarketContainer from '../../../components/EcomComponents/Feature/FeatureMarketContainer';
import HomePageNav from "../../../components/EcomComponents/Nav/HomePageNav";
import News from '../../../components/EcomComponents/News/News';
import Products from '../../../components/EcomComponents/Products/Products';
import Sales from '../../../components/EcomComponents/Sales/Sales';
import Shopping from '../../../components/EcomComponents/Shopping/Shopping';
import HempProduct from '../../../components/EcomComponents/TopCategory/HempProduct';
import TopHeader from '../../../components/EcomComponents/TopHeader/TopHeader';
import TrustedSuppliers from '../../../components/EcomComponents/TrustedSuppliers/TrustedSuppliers';
import Trending from '../../../components/EcomComponents/ViewedToday/Ternding';
import interOrg1 from "../../../assets/landingImages/interOrg1.svg";
import interOrg2 from "../../../assets/landingImages/interOrg2.svg";
import interOrg3 from "../../../assets/landingImages/interOrg3.svg";
import interOrg4 from "../../../assets/landingImages/interOrg4.svg";
import interOrg5 from "../../../assets/landingImages/interOrg5.svg";
import FollowUs from '../../../components/FollowUs/FollowUs';
import Footer from '../../../components/Footer/Footer';
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
        <div>
            <TopHeader />
            <AgenciesHeader />
            <HomePageNav />
            <FeatureMarketContainer />
            <HempProduct />
            <Trending section='trending' />
            <Shopping />
            <Category />
            <div className='mt-6 bg-[#149F76] p-3 text-center text-white'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facilis </h2>
            </div>
            <Deals />
            <Banner />
            <Products />
            <News />
            <Sales />
            <TrustedSuppliers imgs={trustedOrganizations}/>
            <FollowUs/>
            <Footer/>

        </div>
    )
}

export default Landingpage