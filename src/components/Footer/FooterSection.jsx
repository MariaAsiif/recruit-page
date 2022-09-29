import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = ({ heading, data }) => {
    return (
        <div className='mt-4'>
            <h2 className='font-semibold text-[16px]'>{heading}</h2>
            {
                data.map((comp, index) => (
                    <ul key={index} className="mt-1">
                        <Link to="/lexicon">
                            <li className='text-[14px] cursor-pointer text-gray-400'>{comp}</li>
                        </Link>
                    </ul>
                ))
            }
        </div>
    )
}

export default FooterSection