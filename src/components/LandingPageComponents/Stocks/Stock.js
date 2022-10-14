import React from "react";

import interOrg1 from "../../../assets/landingImages/interOrg1.svg";
import interOrg2 from "../../../assets/landingImages/interOrg2.svg";
import interOrg3 from "../../../assets/landingImages/interOrg3.svg";
import interOrg4 from "../../../assets/landingImages/interOrg4.svg";
import interOrg5 from "../../../assets/landingImages/interOrg5.svg";
import followUs1 from "../../../assets/landingImages/twitter.svg";
import followUs2 from "../../../assets/landingImages/facebook.svg";
import followUs3 from "../../../assets/landingImages/youtube.svg";
import followUs4 from "../../../assets/landingImages/snapchat.svg";
import followUs5 from "../../../assets/landingImages/www.svg";
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
import TrustedSuppliers from "../Homepage/TrustedSuppliers/TrustedSuppliers";
import Footer from "../Homepage/Footer/Footer";
import SSL from "../Homepage/SSL/SSL";
import Quote from "../Homepage/Quote/Quote";
import Terms from "../Terms/Terms";
import aboveCopyright1 from "../../../assets/landingImages/aboveCopyright1.svg";
import aboveCopyright2 from "../../../assets/landingImages/aboveCopyright2.svg";
import aboveCopyright3 from "../../../assets/landingImages/aboveCopyright3.svg";
import aboveCopyright4 from "../../../assets/landingImages/aboveCopyright4.svg";
import aboveCopyright5 from "../../../assets/landingImages/aboveCopyright5.svg";
import aboveCopyright6 from "../../../assets/landingImages/aboveCopyright6.svg";
import aboveCopyright7 from "../../../assets/landingImages/aboveCopyright7.svg";
import aboveCopyright8 from "../../../assets/landingImages/aboveCopyright8.svg";
import FollowUs from "../Homepage/FollowUs/FollowUs";
import AgenciesHeader from "../AgenciesPage/AgenciesHeader/AgenciesHeader";
import HomePageNav from "./HomePageNav";
import SalesTable from "./SalesTable/SalesTable";
import Feedback from "../Feedback/FeedBack";
import NewsFeed from "./NewFeed/NewsFeed";

const Stock = () => {
  const styles = {
    margin: "1rem 2rem",
    border: "none",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    padding: " 0 2rem",
  };

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
    { img: followUs4, title: "TencentQQ" },
    { img: followUs5, title: "Vkontakte" },
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
    <>
      <AgenciesHeader />
      <HomePageNav />

      <SalesTable />

      <NewsFeed/>

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
      <Footer />
      <SSL />
      <hr style={styles} />
      <TrustedSuppliers imgs={aboveCopyrightImgs} head="" />
      <Terms />
      <Quote />
      <Feedback/>

    </>
  );
};

export default Stock;
