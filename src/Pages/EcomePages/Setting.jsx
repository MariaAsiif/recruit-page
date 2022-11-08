import React from 'react'
import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav'
import Layout from '../../components/EcomComponents/Layout/Layout'
import Info from '../../components/EcomComponents/settingComp/Info'
import Notification from '../../components/EcomComponents/settingComp/Notification'
import Personal from '../../components/EcomComponents/settingComp/Personal'
import Socialprofile from '../../components/EcomComponents/settingComp/Social'

const Setting = () => {

  return (
    <Layout homenav={true}>
      <HomeNav title={"Vendor Profile"}/>
      <div className='bscontainer lg:p-0  border bg-white shadow-lg mt-6 mb-6 pb-6 '>
        <Info />
        <Personal />
        <Notification />
        <Socialprofile />
        <div className='flex items-center justify-center pt-3 pb-6'>
          <button className='border mx-2 p-2 pl-3 bg-[#27D6A5] text-white pr-3 rounded-md  font-medium'>Update Change</button>
          <button className='border p-2 pl-5 pr-5 bg-[#DB3C23]  text-white rounded-md  font-medium'>Cancel</button>
        </div>
      </div>
    </Layout>
  )
}

export default Setting