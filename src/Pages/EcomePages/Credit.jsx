import React from 'react'
import CardInfo from '../../components/EcomComponents/CreditComp/CardInfo'
import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav'
import Layout from '../../components/EcomComponents/Layout/Layout'

const Credit = () => {

  return (
    <Layout homenav={true}>
      <HomeNav title={"Vendor Purchases"}/>
      <div className='bscontainer p-0 border bg-white shadow-lg  mt-6 mb-6 pb-6 '>
        <CardInfo />
        <div className='flex items-center justify-center pt-3'>
          <button className='border mx-2 p-2 pl-3 bg-[#27D6A5] text-white pr-3 rounded-md  font-medium'>Update Change</button>
          <button className='border p-2 pl-5 pr-5 bg-[#DB3C23]  text-white rounded-md  font-medium'>Cancel</button>
        </div>
      </div>
    </Layout>
  )
}

export default Credit