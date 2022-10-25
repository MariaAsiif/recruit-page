import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

const SingleService = () => {
    return (
        <div className='lg:col-span-6 col-span-24'>
            <div className='rounded-xl'>
                <div className='bg-bottom bg-no-repeat bg-cover h-36 rounded-t-2xl bg-top-background'>  </div>
                <div className='p-3'>
                    <h1 className='text-[#44444F] font-bold mb-3 text-xs'>Tips For Choosing The Perfect Gloss For Your Lips</h1>
                    <div className='flex justify-between mb-3 text-xs font-bold'>
                        <h1 className='text-[#0062FF] '>USD 950,00</h1>
                        <div>
                            <AiTwotoneStar className='inline mr-1 last:mr-0 text-[#FFC542]' />
                            <AiTwotoneStar className='inline mr-1 last:mr-0 text-[#FFC542]' />
                            <AiTwotoneStar className='inline mr-1 last:mr-0 text-[#FFC542]' />
                            <AiTwotoneStar className='inline mr-1 last:mr-0 text-[#D5D5DC]' />
                        </div>
                    </div>
                    <div className='flex justify-between text-xs font-medium'>
                        <h1 className='text-[#92929D] '>Yogyakarta</h1>
                        <h1 className='text-[#92929D] '>4 Hours ago</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleService