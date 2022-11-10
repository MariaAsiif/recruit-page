import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { SiKnowledgebase } from "react-icons/si";
import TopHeader from "../components/EcomComponents/TopHeader/TopHeader";
import HomePageNav from "../components/EcomComponents/Nav/HomePageNav";
import FollowUs from "../components/FollowUs/FollowUs";
import Footer from "../components/Footer/Footer";
import AgenciesHeader from "../components/LandingPageComponents/AgenciesPage/AgenciesHeader/AgenciesHeader";
import Newsletter from "../components/Newsletter";
import Rectangle85 from "../components/Rectangle85";

function Cart() {
  return (
    <>
      <TopHeader />
      <AgenciesHeader />
      <HomePageNav />
      <div className="mt-10 col-10 font-medium text-lg text-[#24D29F] flex bscontainer-fluid truncate">
        <div className="col-2">
          <h1 className="h-[89px]">Product</h1>
          <section className="flex">
            <img className="w-[46px] h-[50px] mt-2 mr-1 p-[5x]" src="" alt="" />
            <p className="font-sans w-[208px] h-[60px] text-[#313131] whitespace-normal py-1 pr-2">
              Hemp & argan nourishing facial oil
            </p>
          </section>
          <button className="h-[65px] w-[217px] px-7 py-2 mt-5 text-lg text-[#313131] bg-[#73E6C5] border-0 font-medium">
            Update Cart
          </button>
        </div>
        <div className="col-1">
          <h1 className="h-[89px]">Price</h1>
          <p className="font-sans w-[82px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">
            $799.00
          </p>
        </div>
        <div className="col-1">
          <h1 className="h-[89px]">Quantity</h1>
          <p className="font-sans w-[13px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">
            2
          </p>
        </div>
        <div className="col-2">
          <h1 className="h-[89px]">Subtotal</h1>
          <p className="font-sans w-[100px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">
            $1,598.00
          </p>
        </div>
        <div className="text-xl col-4">
          <h1 className="h-[89px]">Cart Totals</h1>
          <section className="flex">
            <p className="font-sans w-[13px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">
              Subtotal
            </p>
            <p className="font-sans w-[13px] h-[30px] pl-[300px] text-[#313131] whitespace-normal py-1 pr-2">
              $1,598.00
            </p>
          </section>
          <section className="flex pt-[30px]">
            <p className="font-sans w-[13px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">
              Total
            </p>
            <p className="font-sans w-[13px] h-[30px] pl-[300px] text-[#313131] whitespace-normal py-1 pr-2">
              $1,598.00
            </p>
          </section>
          <button className="h-[65px] w-[417px] items-start text-center justify-center mx-auto px-4 py-2 mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <button className="h-[65px] w-[217px] flex items-center justify-center mx-auto px-7 py-2 mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
        Apply Coupon
      </button>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <SiKnowledgebase size={70} />
                </div>
                <h2 className="text-[30px] flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Knowledge Base
                </h2>
                <p className="pt-[19px] flex text-[15px] items-center justify-center text-base leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores
                </p>
                <button className="lg:w-[382px] lg:h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <BiSupport size={70} />
                </div>
                <h2 className="text-[30px] flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Sales Support
                </h2>
                <p className="pt-[19px] flex text-[15px] items-center justify-center text-base leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores
                </p>
                <button className="lg:w-[382px] lg:h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <MdGroups size={70} />
                </div>
                <h2 className="text-[30px] flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Community
                </h2>
                <p className="pt-[19px] flex text-[15px] items-center justify-center text-base leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores
                </p>
                <button className="lg:w-[382px] lg:h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rectangle85 />
      <Newsletter />
      <FollowUs />
      <Footer />
    </>
  );
}

export default Cart;
