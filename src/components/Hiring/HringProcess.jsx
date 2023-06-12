import React,{useState} from 'react'
import apply from '../../images/joinus/applying.png'
import review from '../../images/joinus/review.png'
import interview from '../../images/joinus/interview.png'
import aboard from '../../images/joinus/aborad.png'
const HringProcess = () => {
    const [steps] = useState([
        {
            heading: "Register an account",
            pic: apply,
        },
        {
            heading: "Specify & search your job",
            pic: review,
        },
        {
            heading: "Apply for job",
            pic: interview,
        },
        {
            heading: "Apply for job",
            pic: aboard,
        }
    ])

    return (
        <div className='bscontainer'>
            {/* <div>
                <div className='flex flex-wrap justify-center items-center lg:px-14 px-1 lg:mb-12 mb-5'>
                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                        <div className={` rounded-full border   pt-2 text-sm  w-[80px] h-[80px] `}></div>
                        <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans uppercase '>Apply on job</span>
                    </div>
                    <div className={`bg-gray-200 h-2 lg:w-[28%] w-[22.6%]`}></div>
                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                        <div className={` pt-2 text-sm w-[80px] h-[80px] rounded-full border`}>02</div>
                        <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Company / Info</span>
                    </div>
                    <div className={` bg-gray-200   h-2 lg:w-[20%] w-[22.6%]`}></div>
                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                        <div className={`  pt-2 text-sm w-[80px] h-[80px] rounded-full border`}>03</div>
                        <span className='absolute bg-white hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Resume</span>
                    </div>
                    <div className={`bg-gray-200   h-2 lg:w-[28%] w-[22.6%]`}></div>
                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                        <div className={`  pt-2 text-sm w-[80px] h-[80px] rounded-full border`}>04</div>
                        <span className='absolute bg-white hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Submit</span>
                    </div>


                </div>
            </div> */}

            <div className='bscontainer py-14'>
                <div className='row'>
                    <div className='col-lg-12 mt-[3rem] mb-6'>
                        <h1 className='text-center text-[#323232] font-sans text-4xl font-bold'>Hiring Process</h1>
                    </div>
                    {steps.map((step, i) => {
                        return (
                            <div key={i} className='col-lg-3 col-md-6 col-sm-6  mb-4 text-center text-[#323232]'>
                                <div className='px-5'>
                                    <div >
                                        <img className='border-2 rounded-full m-auto w-full h-auto max-w-[80px] mb-6' src={step.pic} alt='workimg1' />
                                        <p className='font-sans font-semibold mb-2'>{step.heading}</p>
                                        <p className='  text-[#969696] text-xs font-light leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



        </div>
    )
}

export default HringProcess