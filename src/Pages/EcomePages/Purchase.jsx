import React from 'react'
import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav'
import Layout from '../../components/EcomComponents/Layout/Layout'
import PurchaseList from '../../components/EcomComponents/PurchaseComp/Purchase'

const Purchase = () => {

  return (
    <Layout homenav={true}>
      <HomeNav title={"Vendor Purchases"}/>
      <div className='bscontainer p-0 border bg-white shadow-lg  mt-6 mb-6 pb-6 '>
      <PurchaseList/>
      </div>
    </Layout>
  )
}

export default Purchase