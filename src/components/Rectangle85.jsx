import React from "react";


function Rectangle85() {
  return (
    <div className="container lg:w-[90%] px-6 mx-auto my-24">
      <section className="mb-32">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover bg-Cartimg"
          style={{
            "background-position": "50%",
            height: "500px",
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center justify-center h-full">
              <div className="px-6 text-center text-[#FFFFFF] md:px-12">
                <h2 className="mb-6 lg:text-[38px] md:text-[26px] sm:mt-[50px] font-bold font-sans">
                  Discount up to 35% for first purchase only this month.
                </h2>
                <p className="mb-9 text-[22px] font-sans text-[#FFFFFF] w-[80%] mx-auto">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum
                </p>
                <button
                  className="sm:mb-[50px] flex-shrink-0 font-sans font-semibold text-[25px] bg-[#24D29F] text-[#313131] w-[382px] h-[94px]"
                  type="button"
                >
                  <i className="pr-2 fa fa-shopping-cart" />
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rectangle85;
