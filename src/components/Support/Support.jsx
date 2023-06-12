import React, { useState } from 'react'

import familyImg from '../../images/creche.jpg'
const Support = () => {

    const [active, setActive] = useState(0)

    return (
        <div className='bscontainer'>
            <div className='w-full lg:flex lg:justify-between'>
                <div className="bg-[#F4F5FA] w-full ">
                    <div className='flex lg:flex-row md:flex-row flex-col justify-between '>
                        <div className={`text-[15px] border p-2 me-1  rounded-md cursor-pointer
                           ${active === 0 ? `bg-[#F4F5FA] text-[#93C234] ` : `bg-[#E9E9EC] text-[#898989]`}  `} onClick={() => setActive(0)}>
                            HOW WE SUPPORT <span className={`${active === 0 ? 'text-red-500' : 'text-[#898989]'}`}>WORKING MOTHERS</span>
                            AND THEIR FAMILIES
                        </div>
                        <div className={`text-[15px] border p-2  rounded-md cursor-pointer
                        ${active === 1 ? `bg-[#F4F5FA] text-[#93C234] ` : `bg-[#E9E9EC] text-[#898989]`}`}
                            onClick={() => setActive(1)}>
                            HOW WE SUPPORT <span className={`${active === 1 ? 'text-red-500' : 'text-[#898989]'}`}>WORKING MOTHERS</span>
                            AND THEIR FAMILIES
                        </div>
                    </div>
                    <div>
                        {active === 0 ?
                            <p className='text-justify pt-3 pl-5 pr-5'>
                                Active One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            :
                            <p className='text-justify pt-3 pl-5 pr-5'>
                                Active Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        }
                    </div>
                </div>
                <div>
                    <img src={familyImg} alt="family_imag" />

                </div>
            </div>
        </div>

    )
}

export default Support