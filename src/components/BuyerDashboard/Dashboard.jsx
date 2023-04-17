import React from 'react'
import user from '../../images/buyer/Group 476.png'
import animal from '../../images/buyer/piggybank_icn.svg'
import doller from '../../images/buyer/expense_icn.svg'
import logo from '../../images/buyer/logo1.png'
import logo2 from '../../images/buyer/logo2.png'
import logo3 from '../../images/buyer/logo3.png'
const BuyerDashboard = () => {
  return (
    <div className='pt-5'>
      {/* Active projects */}
      <section>
        <div className="bg-white shadow-md rounded-md ">
          <div className='border-b px-5 py-2 '>
            <h2 className='text-[#2F2F2F] font-semibold'>Active Project</h2>
          </div>
          <div className=' px-4 py-4'>
            <div className='grid grid-cols-3 gap-5'>
              <div className='flex items-center'>
                <img src={user} alt="project" className='object-cover w-[15%]' />
                <div className='pl-2'>
                  <h2 className='text-[#2F2F2F] font-bold '>Randy Riley</h2>
                  <p className='text-[#A6A8B3] text-[14px]'>Lead UX/UI Designer</p>
                </div>
              </div>
              <div className='text-center pt-2 flex items-center font-semibold font-[14px]'>
                <h2 className='text-[#2F2F2F]'>5 Days 2 Hours Left</h2>
                <h2 className='text-[#2F2F2F] ml-20'>$1640,03</h2>
              </div>
              <div className='flex justify-end items-center'>
                <button className='px-6 py-1 text-[14px] text-white shadow-md rounded-md bg-gradient-to-r from-[#24D29F] to-[#24D29F]'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment and Message */}
      <section className='pt-5'>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white shadow-md rounded-md px-5 py-2 ">
            <div className='flex items-center justify-between'>
              <h2 className='text-[20px] font-semibold text-[#222943]'>Payment </h2>
              <select className='border p-3 w-[25%] focus:outline-none'>
                <option>30 days</option>
              </select>
            </div>
            <div className="flex justify-between items-center pt-8">
              <div className='flex items-center justify-center flex-col  w-full'>
                <img src={animal} alt="project" className='object-cover ' />
                <h2 className='text-[#5DD768] text-[28px] pt-[25px]'>$ 34.000,00</h2>
                <p className='text-[#D0D3D5] text-[21px]'>Total Spend</p>
              </div>
              <div className='flex items-center justify-center flex-col  w-full'>
                <img src={doller} alt="project" className='object-cover ' />
                <h2 className='text-[#F27171] text-[28px] pt-[25px]'>$1640.03</h2>
                <p className='text-[#D0D3D5] text-[21px]'>Current Project</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md px-5 py-2 ">
            <h2 className='text-[#222943] font-semibold pt-3 text-[20px]'>Message</h2>
            <ul className='pt-3'>
              <li>
                <div className='flex items-center pt-3'>
                  <img src={user} alt="project" className='object-cover w-[10%]' />
                  <div className='pl-2'>
                    <h2 className='text-[#2F2F2F] font-bold '>Randy Riley</h2>
                    <p className='text-[#A6A8B3] text-[14px]'>Lead UX/UI Designer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center pt-3'>
                  <img src={user} alt="project" className='object-cover w-[10%]' />
                  <div className='pl-2'>
                    <h2 className='text-[#2F2F2F] font-bold '>Randy Riley</h2>
                    <p className='text-[#A6A8B3] text-[14px]'>Lead UX/UI Designer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center pt-3'>
                  <img src={user} alt="project" className='object-cover w-[10%]' />
                  <div className='pl-2'>
                    <h2 className='text-[#2F2F2F] font-bold '>Randy Riley</h2>
                    <p className='text-[#A6A8B3] text-[14px]'>Lead UX/UI Designer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center pt-3'>
                  <img src={user} alt="project" className='object-cover w-[10%]' />
                  <div className='pl-2'>
                    <h2 className='text-[#2F2F2F] font-bold '>Randy Riley</h2>
                    <p className='text-[#A6A8B3] text-[14px]'>Lead UX/UI Designer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* recent Projects */}

      <section className='pt-[24px]'>
        <div className='bg-white shadow-md rounded-md px-5 pt-3'>
          <h2 className='text-[20px] font-semibold text-[#222943] pt-2'>Recent Projects </h2>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <div className='flex items-center'>
              <img src={logo} alt="project" className='object-cover w-[20%] ' />
              <div className='pl-10'>
                <h2 className='text-[#2F2F2F] text-[14px]'>Project Name: Infinis</h2>
                <p className='text-[#D0D3D5] text-[14px] py-2'>Progress: <span className='text-[#3E46AF]'>In Progress</span></p>
                <p className='text-[#D0D3D5] text-[14px]'>Payment: <span className='text-[#37B7C7]'>Paid</span></p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md px-5 py-2 ">
              <div className='flex items-center'>
                <img src={logo2} alt="project" className='object-cover w-[30%] ' />
                <div className='pl-10'>
                  <h2 className='text-[#2F2F2F] text-[14px]'>Project Name: Infinis</h2>
                  <p className='text-[#D0D3D5] text-[14px] py-2'>Progress: <span className='text-[#3E46AF]'>In Progress</span></p>
                  <p className='text-[#D0D3D5] text-[14px]'>Payment: <span className='text-[#37B7C7]'>Paid</span></p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md px-5 py-2 ">
              <div className='flex items-center'>
                <img src={logo3} alt="project" className='object-cover w-[30%] ' />
                <div className='pl-10'>
                  <h2 className='text-[#2F2F2F] text-[14px]'>Project Name: Infinis</h2>
                  <p className='text-[#D0D3D5] text-[14px] py-2'>Progress: <span className='text-[#3E46AF]'>In Progress</span></p>
                  <p className='text-[#D0D3D5] text-[14px]'>Payment: <span className='text-[#37B7C7]'>Paid</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privous Projects */}

      <section className='pt-[62px] pb-5'>
        <div className='bg-white shadow-md rounded-md px-5 py-3'>
          <h2 className='text-[20px] font-semibold text-[#222943] pt-2'>Previous Projects </h2>
          <div className='col-g-12 '>
            <div className="overflow-x-auto bg-white rounded-md">

              <table className="table-auto w-full ">
                {/* Table header */}
                <thead className="text-xs font-normal text-slate-500  border-b border-slate-200">
                  <tr className='text-[#D0D3D5]'>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className=" text-left font-normal text-[14px] ">Date and Time </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className=" text-left font-normal text-[14px] ">Project Name </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className=" text-left font-normal text-[14px] ">Status </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className=" text-left font-normal text-[14px] ">Amount </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className=" text-center font-normal text-[14px] ">Action </div>
                    </th>

                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm ">
                  {Array(3).fill(3).map((_, i) => {
                    return (
                      <tr className='text-[#999FA9] cursor-pointer border-b last:border-b-0' key={i}>
                        <td className="px-2 first:pl-5 last:pr-5 py-3  whitespace-nowrap">
                          <div className="text-left">14.02.2020</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className='flex justify-start items-center'>

                            <h1 className=' text-[#626973] '>Looking for designer for UI/UX Task</h1>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="text-left ">
                            <h2 className='text-[#5DD768]'>Complete</h2>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="text-left text-[#2F2F2F]">$2840,00</div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="flex justify-center items-center">
                            <button className='bg-[#707070] px-3 py-2 rounded-md text-white'>View Details </button>
                          </div>
                        </td>
                       
                      </tr>
                    )
                  })
                  }


                </tbody>
              </table>




            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default BuyerDashboard