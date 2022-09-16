import React from 'react'

const FooterSection = ({heading , data }) => {
    return (
        <div className='mt-4'>
            <h2 className='font-semibold text-[16px]'>{heading}</h2>
            {
                data.map((comp, index) => (
                    <ul key={index} className="mt-1">
                        <li className='text-[14px] text-gray-400'>{comp}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default FooterSection