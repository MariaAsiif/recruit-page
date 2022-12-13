import React from 'react'
import shop from '../../../assets/Stocks/shop.png'
// import round from '../../../assets/Stocks/round.png'
import shape from '../../../assets/Stocks/shape.png'
import ck1 from '../../../assets/Stocks/ck1.png'
import ck2 from '../../../assets/Stocks/ck2.png'
import ck3 from '../../../assets/Stocks/ck3.png'
import ck4 from '../../../assets/Stocks/ck4.png'
const Shop = () => {
  return (
    <>

      <div className='bg-[#EAEFF5] lg:h-[600px] h-[800px] mt-[2rem] mb-[2rem] relative'>
        <div className='relative'>
          <img src={shop} className="lg:object-contain object-cover lg:h-full h-[300px] " alt="shop" />
          <div className='bg-black absolute h-full  opacity-[0.7] top-0 left-0 w-full border'></div>
        </div>
        <div className='absolute lg:top-[10%] top-0 lg:left-[19%] left-[6%]'>
          <div className='text-center my-7'>
            <p className='text-[#24D29F] font-semibold' >HPOR<span className='!text-[14px]'>x</span> CATEGORIES</p>
            <h2 className=' text-white max-w-[230px] m-auto text-[2rem] font-bold'>HPOPx Shop
              By <span className='text-[#24D29F]'>Category</span></h2>
          </div>
          <div className='bscontainer'>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-3'>
              <div className='border lg:h-[300px] mx-2 lg:w-[180px] bg-white rounded-full'>
                <div className='flex justify-center items-center flex-col py-2'>
                  <img src={ck1} className="w-[90%]" alt="category" />
                  <img src={shape} alt="category" className='h-[40px] ' />
                  <h2 className='py-2 font-semibold '>SEEDS & FLOWERS</h2>
                  <p className='text-[#24D29F] text-[14px]'>(5 ITEMS)</p>
                </div>
              </div>
              <div className='border lg:h-[300px] mx-2 lg:w-[180px] bg-white rounded-full'>
                <div className='flex justify-center items-center flex-col py-2'>
                  <img src={ck2} className="w-[90%]" alt="category" />
                  <img src={shape} alt="category" className='h-[40px] ' />
                  <h2 className='py-2 font-semibold '>CLOTHING</h2>
                  <p className='text-[#24D29F] text-[14px]'>(5 ITEMS)</p>
                </div>
              </div>
              <div className='border lg:h-[300px] mx-2 lg:w-[180px] bg-white rounded-full'>
                <div className='flex justify-center items-center flex-col py-2'>
                  <img src={ck3} className="w-[90%]" alt="category" />
                  <img src={shape} alt="category" className='h-[40px] ' />
                  <h2 className='py-2 font-semibold '>SHOES</h2>
                  <p className='text-[#24D29F] text-[14px]'>(5 ITEMS)</p>
                </div>
              </div>
              <div className='border lg:h-[300px] mx-2 lg:w-[180px] bg-white rounded-full'>
                <div className='flex justify-center items-center flex-col py-2'>
                  <img src={ck4} className="w-[90%]" alt="category" />
                  <img src={shape} alt="category" className='h-[40px] ' />
                  <h2 className='py-2 font-semibold '>ELECTRONICS</h2>
                  <p className='text-[#24D29F] text-[14px]'>(5 ITEMS)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Shop