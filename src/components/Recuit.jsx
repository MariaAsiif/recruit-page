import React from 'react'
import whole from '../images/whole seller.jpg'
import nurse from '../images/sales (2).jpg'

const Recuiter = () => {
    return (
        <div className='mt-[5rem] '>
            <div className=' flex justify-between'>
                <div className=' bg-gradient-to-r  from-[#E84025] to-[#68423B]  pt-[3rem] lg:px-[110px] p-[20px] w-full '>
                    <h2 className='text-[43px] font-bold text-white uppercase'>I am recruiter!</h2>
                    <span className=' text-[14px] text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim pariatur quis expedita officiis. Eius obcaecati eaque voluptas amet aliquid quos dicta sit, modi blanditiis, veniam mollitia placeat, dolorem ad repellat.</span><br />
                    <button className='w-[120px] text-white hover:bg-[#93C234] mt-[20px] bg-red-300  h-[40px] rounded-md'>Take a Tour</button>

                </div>
                <div className=' w-full'>
                    <div className=' bg-gradient-to-r  from-[#E84025] to-[#68423B] lg:px-[110px] h-full  pt-[3rem] w-full '>
                        <h2 className='text-[43px] font-bold text-white uppercase'>I am Jobseeker!</h2>
                        <span className=' text-[14px] text-white text-right items-start w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt corporis animi quo consectetur. Mollitia possimus rem laudantium inventore .</span><br />
                        <button className='w-[120px] text-white hover:bg-[#93C234] mt-[20px] bg-red-300  h-[40px] rounded-md'>Take a Tour</button>

                    </div>
                </div>
            </div>



        </div >
    )
}

export default Recuiter