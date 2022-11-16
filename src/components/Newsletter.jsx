import React from "react";
import Lottie from "lottie-react";
import newsletter from "../assets/images/103224.json";

function Newsletter() {
  const playerStyle = {
    background: "transparent",
    speed: 1,
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 mx-auto mt-20 lg:flex-row md:flex-column sm:flex-column md:mt-20 sm:mt-20">
          <div className="flex flex-col items-center text-center lg:flex-grow lg:pr-24 md:pr-16 md:items-start md:text-left">
            <h1 className="lg:text-[56px] font-sans font-bold md:text-[180%] sm:text-[150%] leading-none text-[#313131]">
              For More Update
              <br className="inline-block" />
              Join Our{" "}
              <h1 className="inline-block text-[#24D29F]">News Letter</h1>
            </h1>
            <p className="lg:text-[20px] mt-8 font-sans leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <p className="mb-8 font-sans leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>

            <form className="w-full max-w-sm sm:text-center sm:justify-center sm:mr-auto">
              <div className="flex items-center py-2">
                <input
                  className="appearance-none mx-auto font-sans lg:text-[35px] bg-[#E0DFDF] border-none text-gray-700 leading-tight focus:outline-none lg:w-[406px] h-[81px] px-4"
                  type="text"
                  placeholder="Email"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 font-sans font-semibold text-[25px] bg-[#24D29F] text-[#313131] w-[195px] h-[81px]"
                  type="button"
                >
                  <i className="pr-2 fa fa-envelope" />
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="lg:flex mx-auto md:w-[60%] sm:w-[50%] lg:w-[599px] lg:h-[481px] mb-[70px]">
            <Lottie
              style={playerStyle}
              animationData={newsletter}
              loop={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
