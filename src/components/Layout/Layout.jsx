import React from 'react'
import Header from '../SharedComponents/Header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {
                children
            }
        </>
    )
}

export default Layout