import React from 'react'
import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav'
import Layout from '../../components/EcomComponents/Layout/Layout'

const Setting = () => {

  return (
    <Layout homenav={true}>
      <HomeNav title={"Vendor Purchases"}/>
      <div className='bscontainer p-0 border bg-white shadow-lg  mt-6 mb-6 pb-6 '>
      
      </div>
    </Layout>
  )
}

export default Setting