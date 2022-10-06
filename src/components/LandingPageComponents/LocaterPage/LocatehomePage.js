import React from "react";
import Header from "./Header/Header";
import HomePageNav from "../Homepage2/HomePageNav";
import AgenciesHeader from "../AgenciesPage/AgenciesHeader/AgenciesHeader";
import FeedBack from "../Feedback/FeedBack";
import Quote from "../Homepage/Quote/Quote";
function LocatehomePage() {
  return (
    <>
      <AgenciesHeader />
      <HomePageNav />
      <Header />
      <Quote />
      <FeedBack />
    </>
  );
}
export default LocatehomePage;
