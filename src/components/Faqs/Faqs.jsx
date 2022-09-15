import React from 'react'
import people from '../../images/people.png'
import commas from '../../images/commas.png'
const Faqs = () => {
    return (
        <div className='bscontainer py-9'>
            <div className='row'>
                <div className='col-lg-8 border'>
                    <div>
                        <h1 className='text-center font-bold text-xl font-sans mb-6'>Frequently Asked Questions?</h1>
                    </div>
                </div>
                <div className='col-lg-4 border'>
                    <div>
                        <h1 className='text-center font-bold text-xl font-sans mb-6'>What People Say</h1>
                        <div>
                            <div className='border relative mb-2'>
                                <img className='m-auto w-full h-auto max-w-[130px]' src={people} alt='people' />
                                <img className='  absolute w-full h-auto max-w-[30px] top-24 right-20 ' src={commas} alt='commas' />
                            </div>
                            <h1 className='text-center font-bold text-base font-oxygen'>August Silva</h1>
                            <h1 className='text-[#93C234] text-center text-[10px] font-light font-oxygen mb-4'>web designer</h1>
                            <p className='text-[11px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs