import React from 'react'
import people from '../../images/people.png'
import commas from '../../images/commas.png'
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs'
import { useState } from 'react'
const Faqs = () => {
    const [active, setActive] = useState('')
    const ToggleDropdown = [
        "How we share information?",
        "Hiring Process information?",
        "How can I get job after approval?",
    ]


    const Toggle = ( index) => {
        if(index === active){
            setActive('')
        }
        else{
            setActive(index)
        }
    }


    return (
        <div className='bscontainer py-9'>
            <div className='row'>
                <div className='col-lg-8 '>
                    {ToggleDropdown.map((drop, index) => (
                        <div className='border bg-gray-50 border-gray-50 mt-2'>
                            <div className=' rounded-b-2xl'>
                                <div className='flex justify-between p-4 rounded-b-2xl cursor-pointer bg-[#F4F5FA]' onClick={() => Toggle(index)}>
                                    <h2 className={`${active === index && 'text-[#93C234]'} font-semibold`}>{drop}</h2>
                                    <span >
                                        {active === index ?
                                            <BsArrowDownCircle className={`text-[25px] cursor-pointer ${active === index && 'text-[#93C234]'}`} />
                                            :
                                            <BsArrowRightCircle className={`text-[25px] cursor-pointer `} />
                                        }
                                    </span>

                                </div>
                            </div>
                            {active === index &&
                                <div className='transition-transform  p-5 bg-gray-50'>
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </h2>
                                </div>
                            }
                        </div>
                    ))}

                </div>
                <div className='col-lg-4 '>
                    <div>
                        <h1 className='text-center font-bold text-xl font-sans mb-6'>What People Say</h1>
                        <div>
                            <div className=' relative mb-2'>
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