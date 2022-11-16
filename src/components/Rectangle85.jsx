import React from "react";

function Rectangle85() {
  return (
    <div className="flex items-center justify-center -mb-10 text-center bg-white">
      <div className="mx-auto bg-Cartimg px-5 lg:w-[1920px] lg:h-[456px] bg-cover bg-no-repeat">
        <div className="mx-auto">
          <div className="flex items-center">
            <div className="mx-auto py-[100px]">
              <h3 className="text-4xl font-bold text-white">
                Discount up to 35% for first purchase only this month.
              </h3>
              <p className="max-w-screen-lg mt-2 text-lg text-white/80">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est
              </p>

              <button
                className="mt-9 hover:bg-[#DD2E44] hover:text-white transition-all ease-in flex items-center justify-center px-[30px] py-[15px] mx-auto text-[26px] text-[#313131] bg-[#24D29F] border-0 font-bold font-sans lg:w-[382px] lg:h-[94px]"
                type="button"
              >
                <i className="pr-2 fa fa-shopping-cart" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle85;
