import axios from 'axios'
import React, { useEffect } from 'react'
import Stock from '../../../components/LandingPageComponents/Stocks/Stock'
const Stocks = () => {
    useEffect(()=>{
        let fetch = async () => {
            let res = await axios.get('https://www.cannabisreports.com/Products')
            console.log("REs", res)
        } 
        fetch()
    },[])
    return (
        <div>
           <Stock/>
        </div>
    )
}

export default Stocks