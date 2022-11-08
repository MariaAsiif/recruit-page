import React from "react";
import TopHeader from "../components/EcomComponents/TopHeader/TopHeader";
import AgenciesHeader from "../components/LandingPageComponents/AgenciesPage/AgenciesHeader/AgenciesHeader";
import HomePageNav from "../components/EcomComponents/Nav/HomePageNav";
import Newsletter from "../components/Newsletter";
import FollowUs from "../components/FollowUs/FollowUs";
import Footer from "../components/Footer/Footer";
import CartImg from "../../src/assets/images/cart-img.jpg";

function ProductInfo() {
  return (
    <>
      <TopHeader />
      <AgenciesHeader />
      <HomePageNav />
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
              src="https://dummyimage.com/400x400"
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                Hemp & argan nourishing facial <br />
                oils
              </h1>
              <div className="flex mb-2">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-[34px] h-[34px] text-[#EEBB61]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-[34px] h-[34px] text-[#EEBB61]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-[34px] h-[34px] text-[#EEBB61]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-[34px] h-[34px] text-[#EEBB61]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-[34px] h-[34px] text-[#EEBB61]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">54 Reviews</span>
                </span>
              </div>
              <span className="text-[59px] font-sans font-bold text-[#313131] title-font">
                $10
              </span>
              <p className="pt-5 text-[#707070] text-[14px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur
              </p>

              <div className="flex mt-6">
                {/* <span className="text-2xl font-medium text-gray-900 title-font">
                  $10
                </span> */}
                <button className="flex px-6 py-2 font-sans font-semibold text-[30px] text-[#313131] bg-[#24D29F] shadow-lg">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font">
        <div className="container flex flex-wrap mx-auto">
          <div className="mx-auto">
            <div className="relative flex flex-wrap w-full px-10 py-32 mb-4">
              <img
                alt="gallery"
                className="absolute inset-0 block object-cover object-center w-[1920px] h-[456px]"
                src={CartImg}
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="mb-2 text-2xl font-medium title-font w-1403 h-71">
                  Discount up to 35% for first purchase only this month.
                </h2>
                <p className="leading-relaxed w-1391 h-66">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est
                </p>
                <button className="h-[94px] w-[382px] items-start text-center justify-center mx-auto px-4 py-2 mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <FollowUs />
      <Footer />
    </>
  );
}

export default ProductInfo;
