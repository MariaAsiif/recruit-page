import React from "react";
import Trending01 from "../assets/images/Trending-01.png";

function CartTable() {
  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full px-4 mx-auto mt-24 mb-12 xl:w-8/12 xl:mb-0">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg ">
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 text-[#24D29F] lg:text-[25px] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Product
                    </th>
                    <th className="px-6 text-[#24D29F] lg:text-[25px] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Price
                    </th>
                    <th className="px-6 text-[#24D29F] lg:text-[25px] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Quantity
                    </th>
                    <th className="px-6 text-[#24D29F] lg:text-[25px] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Subtotal
                    </th>
                    <th className="px-6 text-[#24D29F] lg:text-[30px] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Cart Totals
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <th className="pt-8 flex font-sans font-semibold lg:text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-[#313131]">
                      <img
                        className="flex-column w-[46px] h-[50px] mt-2 mr-2"
                        src={Trending01}
                        alt="thumbnailtable"
                      />
                      Hemp & argan <br />
                      nourishing facial oil
                    </th>
                    <td className="font-sans font-semibold lg:text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                      $799.00
                    </td>
                    <td className="font-sans font-semibold lg:text-[22px] border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                      2
                    </td>
                    <td className="font-sans font-semibold lg:text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                      $1,598.00
                    </td>
                    <td>
                      <td className="font-sans font-semibold lg:text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                        Total
                      </td>
                      <td className="font-sans font-semibold lg:text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 pl-[150px] text-right">
                        $1,598.00
                      </td>
                    </td>

                    {/* <table class="w-full">
                      <tr class="w-1/2 bg-indigo-300">
                        <th class="p-2 w-2/3">Server Name</th>
                        <th class="p-2 text-center">Status</th>
                      </tr>
                    </table> */}
                    {/* <section className="flex">
                      <td className="mx-auto font-sans font-semibold lg:text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                        Subtotal
                        <p className="ml-auto ">$1,598.00</p>
                      </td>
                    </section> */}
                    {/* <td className="flex align-top font-sans font-semibold text-[22px] border-t-0 px-6 border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                      Total
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartTable;
