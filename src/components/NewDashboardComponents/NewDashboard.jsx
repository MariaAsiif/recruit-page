import React from 'react'
import { ImFileText2 } from 'react-icons/im'
import gig_dashboard from "../../images/gig_dashboard.png"
import forward from "../../forward.json"
import Lottie from "lottie-react"
import { AiOutlineCaretDown } from 'react-icons/ai'

const NewDashboard = () => {

    return (
        <>
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='p-5 mb-5 bg-white rounded-2xl'>
                <div className='mb-4 row'>
                    <div className='col-lg-6'>
                        <h1 className='text-[#626973] font-bold font-sans text-lg'>Active orders - 1 ($550)</h1>
                    </div>
                    <div className='text-right col-lg-6'>
                        <div className="flex justify-end ">
                            <div>
                                <div className="relative dropdown">
                                    <button className=" dropdown-toggle px-3 py-2  border border-[#4DA676]  text-[#4DA676] font-medium text-xs leading-tight rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Active Order
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />  </svg>
                                    </button>
                                    <ul className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                                        <li>
                                            <span className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"  >Action</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto ">
                            <div className="inline-block min-w-full ">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <tbody>
                                            {Array(2).fill("").map(() => {
                                                return (
                                                    <tr style={{ boxShadow: "0px 2px 5px #0000001A" }}  >
                                                        <td className="px-3 py-3 whitespace-nowrap">
                                                            <div className='flex items-center space-x-2 '>
                                                                <img src="http://placekitten.com/200/200" alt="profile" className="  object-cover  w-full h-auto max-w-[30px] rounded-full" loading="lazy" decoding="async" />
                                                                <div className="text-xs font-normal text-[#ABAFB3] ">Arslan ahmed shaad</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> Social Media Marketing </td>
                                                        <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> 25 Day 17 Hours </td>
                                                        <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> $550 </td>
                                                        <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> <ImFileText2 /> </td>
                                                        <td className="px-3 py-3 text-xs font-medium text-[#4DA676] whitespace-nowrap"> Active</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='p-5 mb-5 bg-white'>
                <div className='row'>
                    <div className='flex items-center justify-center mb-2 lg:mb-0 lg:justify-start col-lg-1 '>
                        <img src={gig_dashboard} alt="logo" loading="lazy" />
                    </div>
                    <div className='mb-2 lg:mb-0 col-lg-10'>
                        <h1 className='text-[#626973] font-bold text-lg mb-1'>Make your Gigs easier to find</h1>
                        <p className='text-[#626973] text-xs'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                    </div>
                    <div className='mb-2 lg:mb-0 col-lg-1'>
                        <div className='w-16 m-auto'>
                            <Lottie animationData={forward} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='mb-5 bg-white '>
                <div className="flex flex-col">
                    <div className="overflow-x-auto ">
                        <div className="inline-block min-w-full ">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <tbody>
                                        {Array(2).fill("").map(() => {
                                            return (
                                                <tr style={{ boxShadow: "0px 2px 5px #0000001A" }} >
                                                    <td className="px-3 py-3 whitespace-nowrap">
                                                        <div className='flex items-center space-x-2 '>
                                                            <img src="http://placekitten.com/200/200" alt="profile" className="  object-cover  w-full h-auto max-w-[40px] rounded-md" loading="lazy" decoding="async" />
                                                            <div className="text-xs font-semibold text-[#626973] ">design and develop Website</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> 350</td>
                                                    <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> 331</td>
                                                    <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> 12 </td>
                                                    <td className="px-3 py-3 text-xs font-medium text-[#464A53] whitespace-nowrap"> 1</td>
                                                    <td className="px-3 py-3 text-xs italic font-medium whitespace-nowrap"> Subscription plan</td>
                                                    <td className="px-3 py-3 text-xs font-medium whitespace-nowrap">
                                                        <div className="flex justify-end ">
                                                            <div>
                                                                <div className="relative dropdown">
                                                                    <button className=" dropdown-toggle px-1 py-1 bg-[#B4B0B0] text-[white] rounded-full font-medium text-xs  focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <AiOutlineCaretDown size={18} />
                                                                    </button>
                                                                    <ul className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                                                                        <li>
                                                                            <span className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"  >Action</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
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
                </div>
            </div>
        </>


    )
}

export default NewDashboard