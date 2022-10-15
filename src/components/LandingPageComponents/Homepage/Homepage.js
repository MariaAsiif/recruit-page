import React, { createContext, Suspense } from "react";
import Agriculture from "./Agriculture/Agriculture";
import BelowGrowProfit from "./BelowGrowProfit/BelowGrowProfit";
import Chillum from "./Chillums/Chillums";
import Cutivation from "./Cultivation/Cultivation";
import GrowProfit from "./GrowProfit/GrowProfit";
import Header from "./Header/Header";
import MedicinesSlick from "./Medicines Slick/MedicinesSlick";
import MedicineSmallSlick from "./MedicineSmallSlick/MedicineSmallSlick";
import Portable from "./Portable/Portable";
import Prescribe from "./Prescribe/Prescribe";
import Statistics from "./Statistics/Statistics";
import SubscribeNewsletter from "./SubscribeNewsletter/SubscribeNewsletter";
import TrustedSuppliers from "./TrustedSuppliers/TrustedSuppliers";
import Vaporize from "./Vaporize/Vaporize";
// import Footer from "./Footer/Footer";
// import Inhalate from "./Inhalate/Inhalate";
import Marketplace from "../MarketPlace/Marketplace";
import Diaganose from "./Diagnose/Diaganose";
import EMultiVendor from "./EMultiVendor/EMultiVendor";
import mensFashionDiscount from "../../../assets/landingImages/mensFashionDiscount.svg";
import giftCard from "../../../assets/landingImages/giftCard.jpg";
import Locate from "./Locate/Locate";
// LANDINF PAGE
import interOrg1 from "../../../assets/landingImages/interOrg1.svg";
import interOrg2 from "../../../assets/landingImages/interOrg2.svg";
import interOrg3 from "../../../assets/landingImages/interOrg3.svg";
import interOrg4 from "../../../assets/landingImages/interOrg4.svg";
import interOrg5 from "../../../assets/landingImages/interOrg5.svg";
import trustedSupplier2 from "../../../assets/landingImages/trustedSupplier2.svg";
import trustedSupplier3 from "../../../assets/landingImages/trustedSupplier3.svg";
import trustedSupplier4 from "../../../assets/landingImages/trustedSupplier4.svg";
import trustedSupplier5 from "../../../assets/landingImages/trustedSupplier5.svg";
import trustedSupplier6 from "../../../assets/landingImages/trustedSupplier6.svg";
import FollowUs from "./FollowUs/FollowUs";
import followUs1 from "../../../assets/landingImages/twitter.svg";
import followUs2 from "../../../assets/landingImages/facebook.svg";
import followUs3 from "../../../assets/landingImages/youtube.svg";
import followUs4 from "../../../assets/landingImages/snapchat.svg";
import followUs5 from "../../../assets/landingImages/tictok.svg";
import followUs6 from "../../../assets/landingImages/messenger.svg";
import followUs7 from "../../../assets/landingImages/instagram.svg";
import followUs8 from "../../../assets/landingImages/linkdin.svg";
import hygie1 from "../../../assets/landingImages/hygie1.svg";
import hygie2 from "../../../assets/landingImages/hygie2.svg";
import hygie3 from "../../../assets/landingImages/hygie3.svg";
import hygie4 from "../../../assets/landingImages/hygie4.svg";
import hygie5 from "../../../assets/landingImages/hygie5.svg";
import hygie6 from "../../../assets/landingImages/hygie6.svg";
import hygie7 from "../../../assets/landingImages/hygie7.svg";
import hygie8 from "../../../assets/landingImages/hygie8.svg";
import hygie9 from "../../../assets/landingImages/hygie9.svg";
import aboveCopyright1 from "../../../assets/landingImages/aboveCopyright1.svg";
import aboveCopyright2 from "../../../assets/landingImages/aboveCopyright2.svg";
import aboveCopyright3 from "../../../assets/landingImages/aboveCopyright3.svg";
import aboveCopyright4 from "../../../assets/landingImages/aboveCopyright4.svg";
import aboveCopyright5 from "../../../assets/landingImages/aboveCopyright5.svg";
import aboveCopyright6 from "../../../assets/landingImages/aboveCopyright6.svg";
import aboveCopyright7 from "../../../assets/landingImages/aboveCopyright7.svg";
import aboveCopyright8 from "../../../assets/landingImages/aboveCopyright8.svg";
import FeatureMarketPlace from "./FeatureMarketplace/FeatureMarketPlace";
import SSL from "./SSL/SSL";
import Terms from "../Terms/Terms";
import Testimonials from "./Testimonials/Testimonials";
import Quote from "./Quote/Quote";
import { ViewTodayContainer } from "../Homepage2/StyledHomepage2";
import ViewedToday from "../Homepage2/ViewedToday/ViewedToday";
import SectionPlaceHolder from '../Globals/SectionPlaceHolder'
import DesignShowcase from "./Inspiration/DesignShowcase";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Feedback from "../Feedback/FeedBack";
import Popup from "./ageDate/Popup";
// import TrustedSuppliers from "./TrustedSuppliers/TrustedSuppliers";
import Footer from "../../Footer/Footer";
// import SSL from "./SSL/SSL";
// import Quote from "./Quote/Quote";
// import Terms from "./Terms/Terms";
export const VolumeContext = createContext();
const styles = {
  margin: "1rem 2rem",
  border: "none",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  padding: " 0 2rem",
};
const Homepage = () => {
  const [volumeValue, setVolumeValue] = React.useState(false);


  const Inhalate = React.lazy(() => import('./Inhalate/Inhalate'))

  const handleVolume = (value) => {
    setVolumeValue(value);
  };
  const fashionDiscountImgs = [
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
    mensFashionDiscount,
  ];
  const giftImgs = [giftCard, giftCard, giftCard, giftCard, giftCard, giftCard];
  const trustedSuppliers = [
    trustedSupplier2,
    trustedSupplier3,
    trustedSupplier4,
    trustedSupplier5,
    trustedSupplier6,
    trustedSupplier6,
    trustedSupplier4,
    trustedSupplier5,
    trustedSupplier6,
    trustedSupplier6,
  ];
  const trustedOrganizations = [
    interOrg1,
    interOrg2,
    interOrg3,
    interOrg4,
    interOrg5,
    interOrg1,
  ];
  const followUsImgs = [
    { img: followUs1, title: "Twitter" },
    { img: followUs2, title: "Facbook" },
    { img: followUs3, title: "Youtube" },
    { img: followUs4, title: "Snapchat" },
    { img: followUs5, title: "Ticktok" },
    { img: followUs6, title: "Messenger" },
    { img: followUs7, title: "Instagram" },
    { img: followUs8, title: "LinkedIn" },
  ];
  const hygieImgs = [
    { img: hygie1, title: "Europe" },
    { img: hygie2, title: "USA" },
    { img: hygie3, title: "Canada" },
    { img: hygie4, title: "Qatar" },
    { img: hygie5, title: "Dubai" },
    { img: hygie6, title: "Spain" },
    { img: hygie7, title: "Qatar" },
    { img: hygie8, title: "Spain" },
    { img: hygie9, title: "Dubai" },
  ];
  const aboveCopyrightImgs = [
    aboveCopyright1,
    aboveCopyright2,
    aboveCopyright3,
    aboveCopyright6,
    aboveCopyright4,
    aboveCopyright5,
    aboveCopyright7,
    aboveCopyright8,
  ];
  return (
    <div className="">
      {/* <Popup/> */}
      <VolumeContext.Provider value={handleVolume}>
        <Header id="HOME" value={volumeValue} />
      </VolumeContext.Provider>

      < DesignShowcase />

      <Suspense fallback={<SectionPlaceHolder />}>
        <Inhalate id="INHALATE" />
      </Suspense>

      <Vaporize id="VAPORIZE" />
      <Portable id="PORTABLES" />
      <Chillum id="CHILLUMS" />
      <Cutivation id="CULTIVATE" />
       <Agriculture id="CULTIVATE" />
      <GrowProfit id="CULTIVATE" />
      {/* <BelowGrowProfit id="CULTIVATE" /> */}
      <TrustedSuppliers
        id="CULTIVATE"
        imgs={trustedSuppliers}
        head="Trusted International Brands"
      /> 
      <Diaganose id="DIAGNOSE" />
      <Prescribe id="PRESCRIBE" />
      {/* <MedicinesSlick id="PRESCRIBE" /> */}
      {/* <MedicinesSlick id="PRODUCTS" /> */}
      {/* <MedicineSmallSlick id="PRODUCTS" /> */}
      <Marketplace id="MARKETPLACE" />
      <FeatureMarketPlace order="second" />
      {/* <FashionDiscount imgs={giftImgs} /> */}
      <ViewTodayContainer>
        <ViewedToday section="viewedToday" />
      </ViewTodayContainer>
      <EMultiVendor />
      <Testimonials />
      <Locate id="LOCATE" />
      <Statistics />
      <SubscribeNewsletter />
      <ViewTodayContainer>
        <ViewedToday section="viewedToday" />
      </ViewTodayContainer>
      <TrustedSuppliers
        imgs={trustedOrganizations}
        head="Trusted International Organizations"
      />
      <FollowUs
        imgs={followUsImgs}
        head="Follow Us"
        imgs1={hygieImgs}
        head1="Hygieia Apothecary"
      />

     <Footer type="landing" />
      {/* <SSL /> */}
      {/* <hr style={styles} /> */}
      {/* <TrustedSuppliers imgs={aboveCopyrightImgs} head="" /> */}
      {/* <Terms /> */}
      {/* <Quote />  */}

      <VolumeContext.Provider value={handleVolume}>
        <Quote value={volumeValue} />
      </VolumeContext.Provider>

      <Feedback />



    </div>
  );
};

export default Homepage;
