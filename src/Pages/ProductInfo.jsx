import React from "react";
import Newsletter from "../components/Newsletter";
// import CartImg from "../../src/assets/images/cart-img.jpg";
import Group238 from "../assets/images/Group 238.png";
import Trending01 from "../assets/images/Trending-01.png";
import Trending02 from "../assets/images/Trending-02.png";
import Trending03 from "../assets/images/Trending-03.png";
import Layout from "../components/EcomComponents/Layout/Layout";
import Rectangle85 from "../components/Rectangle85";

function ProductInfo() {
  return (
    <Layout>
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt="ecommerce"
              className="object-cover object-center w-[601] h-[641px] lg:w-1/2 lg:h-1/2"
              src={Group238}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-[#24D29F] font-sans font-bold text-[50px]">
                Hemp & argan nourishing facial oils
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

              <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                <div className="flex items-center">
                  <div className="relative flex">
                    <div className="w-32 h-10 pt-1 pr-5 custom-number-input">
                      <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg">
                        <button
                          data-action="decrement"
                          className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
                          name="custom-input-number"
                          value="0"
                        ></input>
                        <button
                          data-action="increment"
                          className="w-20 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                    <button className="flex px-6 py-2 font-sans font-semibold text-[30px] text-[#313131] bg-[#24D29F] shadow-lg">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto lg:w-4/5">
        <button
          type="button"
          className="text-[20px] font-sans font-semibold w-[225px] h-[60px] px-4 py-2 m-2 mr-8 text-[white] bg-[#24D29F]"
        >
          Description
        </button>
        <button
          type="button"
          className="text-[20px] font-sans font-semibold w-[245px] h-[50px] px-4 py-2 bg-[#E0DFDF] m-2 mr-8 text-[#707070]"
        >
          Aditional Information
        </button>
        <button
          type="button"
          className="text-[20px] font-sans font-semibold w-[225px] h-[50px] px-4 py-2 m-2 bg-[#E0DFDF] text-[#707070]"
        >
          Reviews (23)
        </button>
      </section>
      <section className="container mx-auto lg:w-4/5 md:w-4/5">
        <h1 className="text-[#313131] text-[35px] py-4 font-sans font-semibold">
          Description
        </h1>
        <p className="text-[20px] mb-[150px] text-[#707070] font-sans">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat
        </p>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4 lg:w-1/5 md:w-1/3 sm:w-1/2 ">
              <a href="!#" className="relative block overflow-hidden">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center  w-[300px] h-[436px]"
                  src={Trending01}
                />
              </a>
            </div>
            <div className="w-full p-4 lg:w-1/5 md:w-1/3 sm:w-1/2">
              <a href="!#" className="relative block overflow-hidden">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center  w-[300px] h-[436px]"
                  src={Trending02}
                />
              </a>
            </div>
            <div className="w-full p-4 lg:w-1/5 md:w-1/3 sm:w-1/2">
              <a href="!#" className="relative block overflow-hidden">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center  w-[300px] h-[436px]"
                  src={Trending03}
                />
              </a>
            </div>
            <div className="w-full p-4 lg:w-1/5 md:w-1/3 sm:w-1/2">
              <a href="!#" className="relative block overflow-hidden">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center  w-[300px] h-[436px]"
                  src={Trending01}
                />
              </a>
            </div>
            <div className="w-full p-4 lg:w-1/5 md:w-1/3 sm:w-1/2">
              <a href="!#" className="relative block overflow-hidden">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center  w-[300px] h-[436px]"
                  src={Trending01}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Rectangle85 />
      <Newsletter />
    </Layout>
  );
}

export default ProductInfo;
