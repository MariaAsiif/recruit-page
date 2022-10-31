import React from "react";
// import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="mt-10 col-10 font-medium text-lg text-[#24D29F] flex bscontainer-fluid truncate">
        <div className="col-2">
          <h1>Product</h1>
          <button className="h-[65px] w-[217px] px-7 py-2 mt-5 text-lg text-[#313131] bg-[#73E6C5] border-0 font-medium">
            Update Cart
          </button>
        </div>
        <div className="col-1">
          <h1>Price</h1>
        </div>
        <div className="col-1">
          <h1>Quantity</h1>
        </div>
        <div className="col-2">
          <h1>Subtotal</h1>
        </div>
        <div className="text-xl col-4">
          <h1>Cart Totals</h1>
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
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="flex items-center justify-center text-base leading-relaxed text-center">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <button className="w-[382px] h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
                <p className="flex items-center justify-center text-base leading-relaxed text-center">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <button className="w-[382px] h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h2>
                <p className="flex items-center justify-center text-base leading-relaxed text-center">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <button className="w-[382px] h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center p-12 py-6 bg-white">
        <div className="w-full max-w-screen-lg px-5 py-10 mx-auto bg-blue-700">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div className="flex justify-center md:justify-end">
              <img
                className="w-[1920px] h-[466px]"
                src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png"
                alt="Marketing newsletter via computer Illustration in PNG, SVG"
              />
            </div>
            <div className="flex items-center">
              <div className="mx-auto md:mx-0">
                <h3 className="text-4xl font-bold text-white">Subscribe</h3>
                <p className="mt-2 max-w-[20rem] text-lg text-white/80">
                  Join our weekly digest. You'll also receive some of our best
                  posts today.
                </p>
                <form action="" className="flex flex-col mt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]"
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="font-sans font-bold w-[485px] h-[76px] title-font sm:text-4xl text-3xl mb-4 text-[#313131]">
              For More Update
              <br class="inline-block" />
              Join Our{" "}
              <h1 className="inline-block text-[#24D29F]">News Letter</h1>
            </h1>
            <p class="mt-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/599x481"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
