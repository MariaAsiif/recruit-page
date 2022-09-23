import React from 'react'
import halfCircle from '../../images/halfCircle.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div style={{ background: "radial-gradient(50% 117.72% at 50% 50%, #EEEBEB 0%, #FFFFFF 100%) " }} className='lg:h-[650px] h-auto'>
            <div className='row h-full g-0'>
                <div className='col-lg-7 flex items-center relative'>
                    <div className=' lg:pl-12 pl-5 pr-5 py-8 lg:pr-32 lg:mt-0 mt-24 lg:mb-0 mb-12'>
                        <h1 className='font-sans font-bold text-4xl mb-5 lg:leading-[50px] text-[#323232] lg:text-left text-center'>The standard Lorem Ipsum passage</h1>
                        <p className='text-[#646464] font-sans text-base font-normal leading-7 lg:mb-16 mb-5 lg:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <Link to="/recruit" className='bg-[#e84025] hover:bg-[#93C234] hover:text-white hover:border-white mr-7 rounded-xl border border-[#E84025] px-6 py-4 text-white font-oxygen font-bold'>Hire Talent</Link>
                        <Link to="/joinus">
                            <button className='bg-white rounded-xl hover:bg-[#93C234] hover:text-white hover:border-white border border-[#E84025] px-6 py-4 text-[#E84025] font-oxygen font-bold lg:float-none float-right'>Browse Job</button>
                        </Link>
                    </div>
                    <img src={halfCircle} alt="halfcircle" className='w-full h-auto max-w-[80px] absolute bottom-0' />
                </div>
                <div className='col-lg-5'>
                    <div className='bg-top-background lg:h-full bg-bottom bg-no-repeat bg-cover h-96'></div>
                </div>
            </div>
        </div>
    )
}

export default Banner