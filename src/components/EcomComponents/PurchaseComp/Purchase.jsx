import React from 'react'
import { HiOutlineRefresh } from 'react-icons/hi'
import DropdownDynamic from '../../DropdownDynamic'
import user from '../../../assets/ecome/shirt.png'
import Rating from '../../EcomComponents/RatingStarts'
import ReactPaginate from 'react-paginate'
const PurchaseList = () => {

    let options = [
        {
            id: 0,
            period: "All Category"
        },
        {
            id: 1,
            period: "All Category"
        },
        {
            id: 2,
            period: "All Category"
        },
    ]



    return (
        <>
            <div>
                <div className='border-b flex items-center justify-between p-4'>
                    <h2 className='font-semibold text-[22px]'>230 Product Purchased</h2>
                    <div className="flex items-center justify-between ">
                        <div>
                            <DropdownDynamic options={options} />
                        </div>
                        <div className="flex items-center">
                            <h2 className="px-2 text-[#24D29F] text-[14px]">Refresh</h2>
                            <HiOutlineRefresh className="text-[#24D29F] text-[15px]" />

                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs  uppercase text-[#B8B8B8] text-[14px] bg-white border-t border-b border-slate-200">
                            <tr>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className=" font-semibold text-left">Product Details</div>
                                </th>
                                <th className="px-1 first:pl-4 last:pr-5 py-3 whitespace-nowrap">
                                    <div className=" font-semibold text-left"> Additional Info</div>
                                </th>

                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className=" font-semibold text-left">Price</div>
                                </th>

                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className=" font-semibold text-center">Download </div>
                                </th>


                            </tr>

                        </thead>
                        <tbody className="text-sm divide-y divide-slate-200">
                            {Array(5).fill(5).map((item, i) => (

                                <tr key={i} >
                                    <td className='p-2'>
                                        <div className='flex items-center p-1'>
                                            <img src={user} className="w-[15%] object-cover" alt="usa" />
                                            <h2 className='mx-2 text-[14px] text-[#35373C]'>Full-Zip EcoSmart Hoodie</h2>
                                        </div>
                                    </td>
                                    <td>
                                        <ul>
                                            <li className='text-[#35373C] text-[14px]'>Date: 26 Jun 2016</li>
                                            <li className='text-[#35373C] text-[14px]'>Licence: Regular</li>
                                            <li className='text-[#35373C] text-[14px]'>Author: AazzTech</li>
                                        </ul>
                                    </td>
                                    <td className='font-semibold'>$334.50</td>
                                    <td >
                                        <div className='flex justify-center '>
                                            <button className='p-2  w-[60%] border rounded-md bg-[#24D29F] text-white  text-[15px]'>Download Item</button>
                                        </div>
                                        <div className='flex justify-center mt-2'>
                                            <div className='w-[60%] border-[#24D29F] items-center pl-6 border p-[7px] rounded-md'>
                                                <Rating value={4} view={"none"} />
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                {/* <div className=" w-full  text-center overflow-x-auto">
                    <table className="table-auto w-full ">
                        <thead className='p-3'>
                            <tr className='text-[#B8B8B8] border-b ' >
                                <th className='text-left !font-normal p-3'>Product Detail</th>
                                <th className=' !font-normal'>Additional Info</th>
                                <th className=' !font-normal'>Price</th>
                                <th className=' !font-normal'>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array(5).fill(5).map((item, _) => (
                                    <tr className='border-b '>
                                        <td className='p-2'>
                                            <div className='flex items-center p-1'>
                                                <img src={user} className="w-[15%] object-cover" alt="usa" />
                                                <h2 className='mx-2 text-[14px] text-[#35373C]'>Full-Zip EcoSmart Hoodie</h2>
                                            </div>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className='text-[#35373C] text-[14px]'>Date: 26 Jun 2016</li>
                                                <li className='text-[#35373C] text-[14px]'>Licence: Regular</li>
                                                <li className='text-[#35373C] text-[14px]'>Author: AazzTech</li>
                                            </ul>
                                        </td>
                                        <td className='font-semibold'>$334.50</td>
                                        <td >
                                            <button className='p-2 border rounded-md bg-[#24D29F] text-white  text-[15px]'>Download Item</button>

                                            <div className=' flex justify-center mt-2'>
                                                <div className='w-[55%] border-[#24D29F] border p-[7px] rounded-md'>
                                                    <Rating value={4} view={"none"} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div> */}

                <div className='puchase_pagination mt-5'>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">>"
                        pageRangeDisplayed={5}
                        pageCount={8}
                        activeClassName="bg-[#24D29F] text-white"
                        nextClassName="w-[30px] bg-[#EEEEEE] h-[30px] text-[#707070] font-medium pt-[2px] text-center border"
                        previousClassName="w-[30px] bg-[#EEEEEE] text-[#707070] font-medium h-[30px] pt-[2px] text-center border"
                        className="flex justify-center items-center "
                        pageClassName="w-[30px] text-[#707070] font-medium bg-[#EEEEEE] h-[30px] pt-[2px] text-center border mx-2"
                        previousLabel="<<"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </>
    )
}

export default PurchaseList