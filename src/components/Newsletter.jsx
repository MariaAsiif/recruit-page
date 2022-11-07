import React from "react";

function Newsletter() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="text-[56px] font-sans font-bold w-[485px] h-[76px] title-font sm:text-4xl text-3xl mb-4 text-[#313131]">
              For More Update
              <br className="inline-block" />
              Join Our{" "}
              <h1 className="inline-block text-[#24D29F]">News Letter</h1>
            </h1>
            <p className="text-[20px] mt-8 font-sans leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <p className="mb-8 font-sans leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>

            <form className="w-full max-w-sm">
              <div className="flex items-center py-2">
                <input
                  className="appearance-none font-sans text-[35px] bg-[#E0DFDF] border-none text-gray-700 leading-tight focus:outline-none w-[406px] h-[81px] px-4"
                  type="text"
                  placeholder="Email"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 font-sans font-semibold text-[25px] bg-[#24D29F] text-sm text-[#313131] w-[195px] h-[81px]"
                  type="button"
                >
                  <i className="pr-2 fa fa-envelope" />
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div>
            <img className="" alt="hero" src="https://dummyimage.com/599x481" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
