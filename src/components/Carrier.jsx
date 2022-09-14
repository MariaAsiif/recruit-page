import React from 'react'
import customer from '../images/Customer service.jpg'
import sales from '../images/sales representatives.jpg'
import discuss from '../images/SALES -Prescriptive Care.jpg'
import lawyers from '../images/Lawyers.jpg'
import whole from '../images/whole seller.jpg'
import nurse from '../images/sales (2).jpg'

const Carrier = () => {

    const CarrierImages = [customer, sales, discuss, lawyers, whole, nurse]
    return (
        <div className='bscontainer mt-[4rem]'>
            <div className='row'>
                <div className='flex justify-between items-center mb-[2rem]'>
                    <div className='w-[500px]'>
                        <h2 className='text-[40px] font-bold'>Career Oppurtunity</h2>
                        <span className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, eius! Natus, iusto consequuntur non neque similique, delectus ipsum </span>
                    </div>
                    <div >
                        <button className='bg-transparent border hover:text-white hover:bg-[#93C234] hover:border-white border-[#E84025] rounded-md w-[150px]  text-[#E84025] p-4 text-[18px]'>Find More</button>
                    </div>
                </div>
                {
                    CarrierImages.map((img, index) => (
                        <div className='col-lg-4 my-4' key={index}>
                            <div style={{ boxShadow: "0px 2.5px 0px 0px rgba(0,0,0,0.30)" }} className='border rounded-md  '>
                                <div>
                                    <img className='w-full rounded-md ' src={img} alt="service" />
                                </div>
                                <div className='bg-[#f6f6f6] px-3 py-4  '>
                                    <h1 className='text-2xl font-semibold uppercase mb-3'>Business Development</h1>
                                    <h6 className='text-gray-400'>Business development is the process that is used to identify, nurture and acquire new clients and business opportunities to drive growth and profitability. A business development strategy is a document that describes the strategy you will use to accomplish that goal.</h6>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-gray-400 text-xs'><span>Full-time</span></div>
                                        <div>asdf</div>
                                        <div><button className='bg-gradient-to-r from-[#E84025] to-[#68423B] hover:bg-green-600 text-white px-5 py-3 rounded-lg text-base'>Apply</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Carrier