
import React, { useState } from 'react'
import Talk from '../../../components/buyerComponents/Brief/Talk'
import Macthing from '../../../components/buyerComponents/Brief/Macthing'
import HireTalent from '../../../components/buyerComponents/HireTalent'
import Footer from '../../../components/Footer/Footer'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

const ProjectBrife = () => {
    const [active, setActive] = useState(0)
    const [progress, setProgress] = useState({
        first: true,
        second: false,
    })

    const handleNext = () => {
        setActive(1)
        setProgress(() => ({
            ...progress, 
            second: true

        }))
    }

    const handleBack = () => {
        setActive(0)
        setProgress(() => ({
            ...progress, 
            second: false

        }))
    }

    console.log("progress", progress)


    return (
        <>
            <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky  top-0 h-[70px] bg-white border-b border-slate-200 z-30 px-10">
                <div className="flex justify-between items-center pt-4">
                    <div className='w-[30%]'>
                        <img className=' h-auto w-[40%] ' src={logo} alt="logo" loading="lazy" />
                    </div>
                    <div className='w-full flex items-center pt-2 '>
                        <div className="flex items-center">
                            <div className={`border w-[30px] h-[30px] justify-center flex items-center rounded-full  text-white ${progress.first === true ? 'bg-[#24D29F]' : 'bg-[#C5C6C9]'}`}>
                                1
                            </div>
                            <h2 className={`px-2 text-[14px] ${progress.first === true ? 'text-[#24D29F]' : 'text-[#C5C6C9]'}`}>Share Brief Description</h2>
                        </div>
                        <div className='flex items-center border-[#F4F4F4] border rounded-full '>
                            <div className={`w-[150px] h-[5px]  ${progress.first === true ? 'bg-[#24D29F]' : 'bg-[#C5C6C9]'}`}></div>
                            <div className={`w-[150px] h-[5px] ${progress.second === true ? 'bg-[#24D29F]' : 'bg-[#C5C6C9]'}`}></div>
                        </div>
                        <div className="flex items-center ml-2">
                            <div className={`border w-[30px] h-[30px] justify-center flex items-center rounded-full  text-white ${progress.second === true ? 'bg-[#24D29F]' : 'bg-[#C5C6C9]'}`}>
                                2
                            </div>
                            <h2 className={`px-2 text-[14px] ${progress.second === true ? 'text-[#24D29F]' : 'text-[#C5C6C9]'}`}>Add timeline and budget</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/buyerLanding" className=' text-[18px] font-bold'>Exit</Link>

                    </div>
                </div>
            </header>
            {
                active === 0 && <Macthing setActive={handleNext} />
            }
            {
                active === 1 && <Talk setActive={handleBack}  />
            }
            <HireTalent />
            <Footer />

        </>
    )
}

export default ProjectBrife