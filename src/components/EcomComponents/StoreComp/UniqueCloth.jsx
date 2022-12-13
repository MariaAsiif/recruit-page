import React from 'react'
import unique1 from '../../../assets/Stocks/unique1.png'
import unique2 from '../../../assets/Stocks/unique2.png'
import unique3 from '../../../assets/Stocks/unique3.png'
const UniqueCloth = () => {
    return (
        <>
            <div className="bscontainer">
                <div className='relative'>
                    <div className=" h-[500px] max-w-[80%] m-auto rounded-md bg-[#F6F6F6] ">

                    </div>
                    <div className='absolute top-[10%]'>
                        <div className="grid grid-cols-2 gap-0 ">
                            <div className="">
                                <img src={unique1} className="h-[80%] w-full object-contain" alt="unique" />
                            </div>
                            <div className="">
                                <div className='pt-5'>
                                    <p className='text-[#24D29F] font-semibold '>Unique Clothes for Everyone!</p>
                                    <h2 className='text-[#151515] text-[2rem] max-w-[280px] font-bold'>Seeds & Flowers
                                        Top Product 2021</h2>
                                    <div className='flex py-6'>
                                        <img src={unique2} className="object-cover w-[20%]" alt="unique" />
                                        <img src={unique3} className="object-cover mx-2 w-[20%]" alt="unique" />
                                        <img src={unique1} className="object-cover w-[20%]" alt="unique" />
                                    </div>
                                    <p className='max-w-[380px] text-[14px]' >
                                        Subscribe to our newsletter and be the first to receive the
                                        latest fashion news, promotions and more! Would you like to
                                        stop receiving our newsletter?</p>
                                    <button className='bg-[#32E3B9] px-6 py-2.5 text-[12px] my-3 text-white rounded-md'>READ MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UniqueCloth