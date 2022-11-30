import React from "react";
import DesignServices from "./DesignServices/DesignServices";
import DesignShowcase from "./DesignShowcase/DesignShowcase";
import AgenciesShowCase from "../AgenciesPage/AgenciesShowCase/AgenciesShowCase";
import Agency from "../DesignIQ/Agency/Agency";
import MultiEffectSlider from "./MultiEffectSlider/MultiEffectSlider";
import AgenciesOffers from "../DesignIQ/Agency/AgenciesOffers";
import BelowEditIQ from "../DesignIQ/BelowEditIQ/BelowEditIQ";
import ShowCase from "../DesignIQ/ShowCase/ShowCase";
import OurPackages from "../DesignIQ/Packages/OurPackages";
import AgenciesFaq from "../AgenciesPage/AgenciesFaq/AgenciesFaq";
import GetInTouch from "../DesignIQ/GetInTouch/GetInTouch";
import AgenciesHeader from "./AgenciesHeader/AgenciesHeader";
import Footer from "../../LandingPageComponents/Homepage/Footer/Footer";
import aboveCopyright1 from '../../assets/aboveCopyright1.svg';
import aboveCopyright2 from '../../assets/aboveCopyright2.svg';
import aboveCopyright3 from '../../assets/aboveCopyright3.svg';
import aboveCopyright4 from '../../assets/aboveCopyright4.svg';
import aboveCopyright5 from '../../assets/aboveCopyright5.svg';
import aboveCopyright6 from '../../assets/aboveCopyright6.svg';
import aboveCopyright7 from '../../assets/aboveCopyright7.svg';
import aboveCopyright8 from '../../assets/aboveCopyright8.svg';
import SSL from '../../LandingPageComponents/Homepage/SSL/SSL';
import TrustedSuppliers from '../../LandingPageComponents/Homepage/TrustedSuppliers/TrustedSuppliers';
import Terms from '../../LandingPageComponents/Terms/Terms';
import HomePageNav from '../Homepage2/HomePageNav';
import Feedback from "../Feedback/FeedBack";

const aboveCopyrightImgs = [aboveCopyright1, aboveCopyright2, aboveCopyright3, aboveCopyright6, aboveCopyright4, aboveCopyright5, aboveCopyright7, aboveCopyright8,]

function MainPage() {

  return (
    <div>
      <AgenciesHeader />
      <HomePageNav/>
      <AgenciesShowCase />
      <Agency />
      <MultiEffectSlider />
      <DesignShowcase />
      <DesignServices />
      <AgenciesOffers />
      <BelowEditIQ />
      <ShowCase />
      <OurPackages />
      <AgenciesFaq />
      <GetInTouch />
      <Footer />
      <SSL />
      <TrustedSuppliers imgs={aboveCopyrightImgs}  />
      <Terms />
      <Feedback />

      </div>
  );
}
export default MainPage;
