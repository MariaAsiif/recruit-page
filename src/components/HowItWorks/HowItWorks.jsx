import React from 'react'
import accountRegister from '../../images/accountRegister.png'
const HowItWorks = () => {
    return (
        <div className='bscontainer py-14 border'>

            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-center text-[#323232] font-sans text-[56px] font-bold'>How it Works</h1>
                </div>
                <div className='col-lg-4 border bg-gray-200'>
                    <div>

                        <div>
                            <img src={accountRegister} alt='workimg1' />
                            <p>Register an account</p>
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4'>
                    asdfasdf
                </div>
                <div className='col-lg-4'>
                    asdfasdf
                </div>
            </div>


        </div>
    )
}

export default HowItWorks