import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const FavritJobs = ({ status }) => {
    return (
        <>
            <div className='row mt-[50px]'>
                <div className='col-lg-12 flex lg:flex-row flex-col  items-end mb-5'>
                    <div className='w-[90%]'>
                        <h1 className='text-[#0D1829] text-[16px] font-semibold mb-2'>Favorite Jobs</h1>
                        <h1 className='text-[#626973] text-[14px] text-xs font-normal'>Based on your preferences</h1>
                    </div>
                    <div className='flex  items-center lg:mt-0 md:mt-0 mt-2 '>
                        <div className='border flex items-center bg-white rounded-full w-full p-[5px] pl-[10px] pr-[10px]' >
                            <input type="text" placeholder='Search here...' className='w-full focus:outline-none placeholder:text-sm  ' />
                            <AiOutlineSearch className='text-gray-400'/>
                            
                        </div>
                        <div className="text-center w-[50%] lg:ml-3 lg:my-0 md:my-0 my-2">

                            <div className="dropdown relative">
                                <button className=" dropdown-toggle px-5 shadow-2xl w-full justify-between py-2 bg-white  text-[#626973] font-medium text-[11px] leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out  flex items-center  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    FILTER
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-3 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"  ></path> </svg>
                                </button>
                                <ul className=" dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-center font-medium rounded-lg shadow-2xl mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Cancel</span>
                                    </li>
                                    <li>
                                        <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#E84025] hover:bg-gray-100 " >Cancel Request</span>
                                    </li>
                                    <li>
                                        <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Details</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-g-12 '>
                    <div className="overflow-x-auto bg-white rounded-md">
                        <table className="table-auto w-full hover">
                           
                            {/* Table body */}
                            <tbody className="text-sm ">
                                {status.map((status) => {
                                    return (
                                        <tr className='text-[#999FA9] cursor-pointer hover:bg-[#dffdc9] '>
                                            <td className=" first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                 <img className=' w-full h-auto max-w-[60px] rounded-md' src={"http://placekitten.com/100/100"} alt="logo" loading="lazy" />
                                            </td>
                                            <td className=" first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className='flex justify-center items-center'>
                                                   
                                                    <h1 className='font-semibold text-[#626973] '>UI/UX DESIGNER</h1>
                                                </div>
                                            </td>
                                            <td className=" first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center">
                                                    <img className=' w-full h-auto max-w-[20px] rounded-full inline-block mr-2' src={"http://placekitten.com/100/100"} alt="logo" loading="lazy" />
                                                    Google
                                                </div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">Full Time</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">02 September 22</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                               <button className='bg-[#E84025] text-white lg:w-[60%] p-2 rounded-md'>Easy Apply</button>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-center ">
                                                    <div className="dropdown relative">
                                                        <button className="dropdown-toggle px-2 text-[#E84025] font-medium text-lg leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out   " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> ... </button>
                                                        <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-center font-medium rounded-lg shadow-2xl mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                                            <li>
                                                                <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Remove Favorite</span>
                                                            </li>
                                                            <li>
                                                                <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#E84025] hover:bg-gray-100 " >Delete Favorite</span>
                                                            </li>
                                                            <li>
                                                                <span className=" dropdown-item text-sm py-2 px-4 cursor-pointer block w-full whitespace-nowrap bg-transparent text-[#626973] hover:bg-gray-100 " >Cancel</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default FavritJobs