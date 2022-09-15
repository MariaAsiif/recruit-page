import React, { useState } from 'react'

const JobHuntStats = () => {
    const [stats] = useState([
        {
            text: "Jobs posted",
            stat: 18,
        },
        {
            text: "Jobs Filled",
            stat: 38,
        },
        {
            text: "Companies",
            stat: 64,
        },
        {
            text: "Members",
            stat: 180,
        },
    ])
    return (
        <div className='bscontainer-fluid bg-[#F4F5FA] lg:pt-12 lg:pb-12 pt-8 pb-0 lg:px-36'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-[#323232] font-sans font-bold text-3xl text-center lg:mb-8 mb-4'>JobHunt Site Stats</h1>
                </div>
                {stats.map((stat, i) => {
                    return (
                        <div key={i} className='col-lg-3 text-center lg:mb-0 mb-7'>
                            <h1 className='text-[#323232] font-sans lg:text-3xl  text-4xl font-bold mb-2'>{stat.stat}</h1>
                            <h1 className='text-[#93C234] lg:text-xs  '>{stat.text}</h1>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default JobHuntStats