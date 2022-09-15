import React from 'react'

const Recuiter = () => {
    return (
        <div className='mt-[5rem] '>
            <div className=' lg:flex lg:justify-between xs:flex-col'>
                <div className=' w-full relative bg-recruiter  bg-center bg-no-repeat bg-cover'>
                    <div className='absolute   w-full h-full top-0 bg-[#2f2f2f] opacity-80' >
                        <div className='   pt-[3rem] lg:px-[110px] p-[20px] w-full '>
                            <h2 className='text-[43px] font-bold text-white uppercase'>I am recruiter!</h2>
                            <span className=' text-[14px] text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim pariatur quis expedita officiis. Eius obcaecati eaque voluptas amet aliquid quos dicta sit, modi blanditiis, veniam mollitia placeat, dolorem ad repellat.</span><br />
                            <button className='w-[120px] text-white hover:bg-[#93C234] mt-[20px] bg-red-300  h-[40px] rounded-md'>Take a Tour</button>

                        </div>
                    </div>

                </div>




                <div className=' w-full relative bg-jobseeker  bg-center bg-no-repeat bg-cover h-80 '>
                    <div className='absolute   w-full h-full top-0 bg-[#7E9A70] opacity-80' >
                        <div className='  pt-10 lg:h-full lg:px-[110px] h-full    w-full '>
                            <h2 className='text-[43px] font-bold text-white uppercase'>I am Jobseeker!</h2>
                            <span className=' text-[14px] text-white text-right items-start w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt corporis animi quo consectetur. Mollitia possimus rem laudantium inventore .</span><br />
                            <button className='w-[120px] text-white hover:bg-[#93C234] mt-[20px] bg-red-300  h-[40px] rounded-md'>Take a Tour</button>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default Recuiter