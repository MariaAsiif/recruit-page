import React from 'react'

const Invoice = () => {
    return (
        <div >
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='p-5 bg-white rounded-2xl'>
                <div className='row'>
                    <div className='col-lg-2 text-[#707070] font-semibold'>Earnings</div>
                    <div className='col-lg-10'>
                        <div className='p-4 mt-8 text-center border rounded-xl row g-0'>
                            <div className='col-lg-3'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Total Invoice</h1>
                                <h1 className='text-[#4DA676] font-bold font-sans'>$13250</h1>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Overdue</h1>
                                <h1 className='text-[#E84125] font-bold font-sans'>$13250</h1>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Paid</h1>
                                <h1 className='text-[#5D89ED] font-bold font-sans'>$13250</h1>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-[#464A53] font-bold text-lg font-sans'>Unpaid</h1>
                                <h1 className='text-[#4DA676] font-bold font-sans'>$13250</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice