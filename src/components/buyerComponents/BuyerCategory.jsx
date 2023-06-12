
import React, { useState } from 'react'
import graphic from '../../images/002-layers.svg'
import graphic2 from '../../images/002-layers2.svg'
import market from '../../images/008-digital-marketing.svg'
import market2 from '../../images/008-digital-marketing2.svg'
import program from '../../images/007-feature.svg'
import program2 from '../../images/007-feature2.svg'
import music from '../../images/003-film-editing.svg'
import music2 from '../../images/003-film-editing2.svg'
import write from '../../images/subjects.svg'
import write2 from '../../images/subjects2.svg'
import anim from '../../images/006-film.svg'
import anim2 from '../../images/006-film2.svg'
const BuyerCategory = () => {

    const [ active , setActive] = useState(null)


    let category = [{heading :"Graphic Design" , pic : graphic , activePic:graphic2 },{heading :"Digital Marketing" , pic :market , activePic:market2 },{heading :"Programming Toch" , pic : program, activePic:program2},{heading :"Music & Audio" , pic : music, activePic:music2},{heading :"Write & Trantalion" , pic : write, activePic:write2},{heading :"Video & Animation" , pic : anim, activePic:anim2}]
    return (
        <>
            <div className='max-w-[700px] m-auto text-center py-[2rem]'>
                <h2 className='text-[48px] text-[#505964] font-semibold'>Explore Categories</h2>
                <p className='text-[#9098A1] text-[16px]'>There are many variations of passages oforem are many variations of There are many variations of passages of</p>
            </div>
            <div className='max-w-[900px] m-auto px-10'>

                <div className='grid grid-cols-3 gap-5'>
                    {
                       category.map((item, i) => (
                            <div onClick={() => setActive(i)} className={`shadow-md bg-white cursor-pointer p-10 ${active === i && 'border-2 border-[#24D29F]'}`} key={i}>
                                <div className='flex  justify-center items-center'>
                                    <img src={active === i ? item?.activePic : item?.pic} alt="cate_img" className='object-cover w-[50%]' />
                                </div>
                                <h1 className={`text-center pt-4 font-semibold ${active === i ? 'text-[#24D29F]' : 'text-[#707070]'} text-[18xpx]`}>{item?.heading}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default BuyerCategory