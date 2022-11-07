import React from 'react'
import use from '../../../../assets/ecome/usa.png'
import { Pie, PieChart } from '../Chart/Pie'
const Statistic = () => {
    return (
        <>

            <div className='bscontainer mt-6'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='border shadow-lg'>
                            <div className='border-b p-4'>
                                <div className='flex justify-between'>
                                    <h2 className='font-semibold'>Country Statistic</h2>
                                </div>
                            </div>

                            <div className="table-responsive w-full  text-center">
                                <table className="w-full ">
                                    <thead className='p-3'>
                                        <tr className='text-[#B8B8B8] border-b ' >
                                            <th className='text-left !font-normal p-3'>Country</th>
                                            <th className=' !font-normal'>Visitors</th>
                                            <th className=' !font-normal'>Sales</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Array(5).fill(5).map((item, _) => (
                                                <tr className='border-b last:border-b-0'>
                                                    <td className='p-2'>
                                                        <div className='flex items-center p-1'>
                                                            <img src={use} className="w-[10%]" alt="usa" />
                                                            <h2 className='mx-2 text-[14px]'>United State</h2>
                                                        </div>
                                                    </td>
                                                    <td>534</td>
                                                    <td>12 May 2017</td>
                                                </tr>

                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='border shadow-lg'>
                            <div className='border-b p-4'>
                                <div className='flex justify-between'>
                                    <ul className='flex'>
                                        <li className='border-r px-2 h-full'>
                                            <h2 className='font-semibold text-[#24D29F]'>Visit Source </h2>
                                        </li>
                                        <li className='px-2'>
                                            <h2 className='font-semibold'>Referrals</h2>
                                        </li>
                                    </ul>
                                    <div>
                                        Nov 2022
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div>
                                    <PieChart />
                                </div>

                                <div className='flex items-center justify-between pt-2'>
                                    <div className='flex items-center'>
                                        <span className='w-2 h-2 mx-1  rounded-full inline-block bg-[#24D29F] mr-1 align-middle'></span>
                                        <h2 className='font-semibold'>Google</h2>
                                    </div>
                                    <h2 className='font-medium'>120</h2>
                                </div>
                                <div className='flex items-center justify-between pt-1'>
                                    <div className='flex items-center'>
                                        <span className='w-2 h-2 mx-1  rounded-full inline-block bg-[#D26571] mr-1 align-middle'></span>
                                        <h2 className='font-semibold'>Website</h2>
                                    </div>
                                    <h2 className='font-medium'>90</h2>
                                </div>
                                <div className='flex items-center justify-between pt-1'>
                                    <div className='flex items-center'>
                                        <span className='w-2 h-2 mx-1  rounded-full inline-block bg-[#E7A662] mr-1 align-middle'></span>
                                        <h2 className='font-semibold'>Affiliate</h2>
                                    </div>
                                    <h2 className='font-medium'>70</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Statistic