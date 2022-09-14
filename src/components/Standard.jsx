
import React from 'react'
import { ImStatsBars } from 'react-icons/im'
function Standard() {
    return (
        <div className='bscontainer'>
            <h2 className='text-[35px] font-bold text-center'>Standard Lorem Ipsum Passage</h2>
            <p className='text-center text-gray-400 text-sm max-w-[450px] m-auto my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat provident </p>
            <div className='row text-center mt-[60px]'>
                <div className='col-lg-3'>
                    <div className='border flex flex-col items-center rounded-md h-[130px] pt-[10px] bg-gray-100 hover:bg-[#93C234] hover:text-white'>
                        <div className='border  w-[50px] h-[50px] text-center bg-[#93C234] rounded-[30px]'>
                            <ImStatsBars className='text-[40px] pl-2 text-white' />
                        </div>
                        <h2 className="text-[22px]  font-semibold">Sales</h2>
                        <span className="text-gray-400">(465 jobs Opening)</span>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div className='border flex flex-col items-center rounded-md h-[130px] pt-[10px] bg-gray-100 hover:bg-[#93C234] hover:text-white'>
                        <div className='border  w-[50px] h-[50px] text-center bg-[#93C234] rounded-[30px]'>
                            <ImStatsBars className='text-[40px] pl-2 text-white' />
                        </div>
                        <h2 className="text-[22px]  font-semibold">Freelance</h2>
                        <span className="text-gray-400">(465 jobs Opening)</span>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div className='border flex flex-col items-center rounded-md h-[130px] pt-[10px] bg-gray-100 hover:bg-[#93C234] hover:text-white'>
                        <div className='border  w-[50px] h-[50px] text-center bg-[#93C234] rounded-[30px]'>
                            <ImStatsBars className='text-[40px] pl-2 text-white' />
                        </div>
                        <h2 className="text-[23px] font-semibold">Contract</h2>
                        <span className="text-gray-400">(465 jobs Opening)</span>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div className='border flex flex-col items-center rounded-md h-[130px] pt-[10px] bg-gray-100 hover:bg-[#93C234] hover:text-white'>
                        <div className='border  w-[50px] h-[50px] text-center bg-[#93C234] rounded-[30px]'>
                            <ImStatsBars className='text-[40px] pl-2 text-white' />
                        </div>
                        <h2 className="text-[22px]  font-semibold">Professional</h2>
                        <span className="text-gray-400">(465 jobs Opening)</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Standard