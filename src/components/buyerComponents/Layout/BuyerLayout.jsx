import React from 'react'
import BuyerHeader from '../Header'
import SubBar from '../SubBar'
import Footer from '../../Footer/Footer'

const BuyerLayout = ({ children }) => {
    return (
        <>
            <BuyerHeader />
            <SubBar />
            <div className=''>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default BuyerLayout