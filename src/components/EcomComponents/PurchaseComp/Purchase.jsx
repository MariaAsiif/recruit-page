import React from 'react'

const Purchase = () => {
    return (
        <>
            <div>
                <div className='border-b flex items-center justify-between p-4'>
                    <h2 className='font-semibold'>Recent Item Sales</h2>
                    <div className="flex items-center ">
                        <h2 className="px-2 text-[#24D29F] text-[14px]">Refresh</h2>
                        <HiOutlineRefresh className="text-[#24D29F] text-[15px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Purchase