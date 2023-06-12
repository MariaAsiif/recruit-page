import React from 'react'
import CardInfo from '../../components/EcomComponents/CreditComp/CardInfo'
import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav'
import Layout from '../../components/EcomComponents/Layout/Layout'

const Credit = () => {

  return (
    <Layout homenav={true}>
      <HomeNav title={"Vendor Purchases"}/>
      <div className='bscontainer lg:p-0 border bg-white shadow-lg  mt-6 mb-6 pb-6 '>
        <CardInfo />
       
      </div>
    </Layout>
  )
}

export default Credit