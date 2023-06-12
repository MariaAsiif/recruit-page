import React from 'react'

const InvoiceInformation = () => {
    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='pb-5 bg-white rounded-2xl'>
            <div className='px-3 py-3 mb-5 border-b lg:px-10'>
                <h1 className='text-[#707070] font-semibold text-xl '>Invoice Information</h1>
            </div>
            <div className='px-3 mb-5 row g-0 lg:px-10'>
                <div className='col-lg-8'>
                    <h1 className='text-[#4DA676] font-medium'>Y& Co Distributors</h1>
                    <small className='text-xs text-[#ABAFB3] mb-4 block'>www.distributors.com</small>
                    <p className='text-[#464A53] text-sm font-medium'>2121 Winifred Way</p>
                    <p className='text-[#464A53] text-sm font-medium'>Logansport, IN 46947</p>
                    <p className='text-[#464A53] text-sm font-medium mb-4'>United States</p>
                    <p className='text-[#464A53] text-sm font-medium'>Telephone: <span className='text-[#ABAFB3]'>(+1) 765-652-3143</span></p>
                    <p className='text-[#464A53] text-sm font-medium mb-4'>Fax: <span className='text-[#ABAFB3]'>803-524-8398</span></p>
                </div>
                <div className='col-lg-4'>
                    <h1 className='text-[#4DA676] font-medium mb-4'>Invoice - #154-24</h1>
                    <p className='text-[#464A53] text-sm font-medium'>Date: <span className='text-[#ABAFB3]'>Mar 08,2018</span></p>
                    <p className='text-[#464A53] text-sm font-medium mb-4'>Due Date: <span className='text-[#ABAFB3]'>Jun 08,2018</span></p>
                </div>
                <div className='col-lg-8'>
                    <h1 className='text-[#4DA676] font-medium'>Invoice To</h1>
                    <p className='text-[#464A53] text-sm font-medium mb-4'>Evelyn W. Bowyer</p>
                    <h1 className='text-[#4DA676] font-medium'>K&G Distributors</h1>
                    <p className='text-[#464A53] text-sm font-medium'>2121 Winifred Way</p>
                    <p className='text-[#464A53] text-sm font-medium'>Logansport, IN 46947</p>
                    <p className='text-[#464A53] text-sm font-medium mb-4'>United States</p>
                </div>
                <div className='col-lg-4'>
                    <h1 className='text-[#4DA676] font-medium mb-4'>Payment Details:</h1>
                    {Array(5).fill("").map(() => {
                        return (
                            <div className='mb-2 row g-0'>
                                <div className='col-lg-5 text-[#464A53] text-sm font-medium'>
                                    <h1>Total Due</h1>
                                </div>
                                <div className='col-lg-2 text-[#ABAFB3] text-sm font-medium'>
                                    <h1>:</h1>
                                </div>
                                <div className='col-lg-5 text-[#ABAFB3] text-sm font-medium'>
                                    <h1>Jun 08, 2018</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className='mb-5 text-right lg:px-10'>
                <button className='bg-[#42946C] rounded px-5 py-2 text-white mr-3'>Generate PDF</button>
                <button className='bg-white rounded px-5 border-2 border-[#42946C] py-2 text-[#42946C]'>Submit Payment</button>
            </div>
        </div>
    )
}

export default InvoiceInformation