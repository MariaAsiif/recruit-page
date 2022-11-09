import React from "react";
import Newsletter from "../components/Newsletter";
// import CartImg from "../../src/assets/images/cart-img.jpg";
import Group238 from "../assets/images/Group 238.png";
import Trending01 from "../assets/images/Trending-01.png";
import Trending02 from "../assets/images/Trending-02.png";
import Trending03 from "../assets/images/Trending-03.png";
import Layout from "../components/EcomComponents/Layout/Layout";

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
                <div className="flex items-center ml-6">
                  <div className="relative">
                    <select className="py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                  <button className="flex px-6 py-2 font-sans font-semibold text-[30px] text-[#313131] bg-[#24D29F] shadow-lg">
                    Add To Cart
                  </button>
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
      <section className="container mx-auto lg:w-4/5">
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

      <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="">
              Discount up to 35% for first purchase only this month.
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <button
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
}

export default ProductInfo;
