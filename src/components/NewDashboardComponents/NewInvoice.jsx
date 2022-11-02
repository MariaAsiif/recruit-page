import React from 'react'

const NewInvoice = () => {
    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='pb-5 bg-white rounded-2xl'>
            <div className='px-3 py-3 mb-5 border-b lg:px-10'>
                <h1 className='text-[#707070] font-semibold text-xl '>Create New Invoice</h1>
            </div>
            <div className='row g-0 p-5'>
                <div className='col-lg-12  flex justify-end gap-3 mb-5'>
                    <button className='bg-[#42946C] px-5 py-2 rounded font-light text-xs  text-white '>Save as Draft</button>
                    <div className="flex justify-center ">
                        <div>
                            <div className="relative dropdown">
                                <button className=" dropdown-toggle px-3 py-2  border border-[#4DA676]  text-[#4DA676] font-medium text-xs leading-tight rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Invoice
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
                <div className='col-lg-6'>
                    <div className='mb-4'>
                        <button style={{ boxShadow: "0px 3px 10px #7777771A" }} className='bg-white text-[#464A53]   font-sans px-5 py-1 mr-3'>Draft</button>
                        <button className='bg-white text-[#464A53] border border-[#DDDFE1]  font-sans px-5 py-1 mr-3'>Invoice</button>
                    </div>
                    <div>
                        <textarea rows={4} className='border w-full  font-sans p-3 border-[#DDDFE1]  text-[#ABAFB3]  '>dsf</textarea>
                    </div>
                </div>
                <div className='col-lg-6 flex justify-end items-end flex-col'>
                    <div className='flex border border-dashed border-[#CCCCCC] flex-col gap-4 justify-center items-center p-5'>
                        <div className='w-10 h-10 rounded-full bg-black'></div>
                        <h1 className='text-[#464A53] text-[10px] font-sans'>Upload a Company Logo</h1>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <label className='text-[#464A53] font-sans block'>Invoice No:</label>
                    <input className='border text-[#464A53]  border-[#DDDFE1] p-2' value="1523" />
                </div>
                <div className='col-lg-2'>
                    <label className='text-[#464A53] font-sans block'>Language</label>
                    <div className="flex ">
                        <div>
                            <div className="relative dropdown">
                                <button className=" dropdown-toggle px-3 py-2  border border-[#DDDFE1]  text-[#464A53] font-medium text-xs leading-tight rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Invoice
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
                <div className='col-lg-2 flex flex-col items-end'>
                    <label className='text-[#464A53] font-sans block'>Currency</label>
                    <div className="flex ">
                        <div>
                            <div className="relative dropdown">
                                <button className=" dropdown-toggle px-3 py-2  border border-[#DDDFE1]  text-[#464A53] font-medium text-xs leading-tight rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Invoice
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
        </div>
    )
}

export default NewInvoice