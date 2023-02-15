import React,{useState , useEffect} from 'react'
// import customer from '../images/Customer service.jpg'
// import sales from '../images/sales representatives.jpg'
// import discuss from '../images/SALES -Prescriptive Care.jpg'
// import lawyers from '../images/Lawyers.jpg'
// import whole from '../images/whole seller.jpg'
// import nurse from '../images/sales (2).jpg'
import { Link } from 'react-router-dom'
import Layout from './Layout/Layout'
import { callPublicApi, HOSTNAME} from '../utils/CallApi'
import { Truncate } from '../utils/TrucateString'

const Carrier = () => {

    const [jobs , setJobs] = useState([])

    useEffect(() => {

        let payload = {
            "sortproperty": "created_at",
            "sortorder": -1,
            "offset": 0,
            "limit": 50
        }

      let fetch = async () => {
        try{
            let res = await callPublicApi('/jobspublic/listjobsforpublic', 'post', payload)
            setJobs(res?.data?.jobs)
        }
        catch(err){
            
        }
      }
      fetch()
    },[])

    // const CarrierImages = [customer, sales, discuss, lawyers, whole, nurse]
    return (
        <Layout>
            <div className='bscontainer mt-[4rem]'>
                <div className='row'>
                    <div className='flex flex-wrap justify-between items-center mb-[2rem]'>
                        <div className='w-[500px]'>
                            <h2 className='lg:text-[40px] text-[34px] font-bold'>Career Oppurtunity</h2>
                            <span className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, eius! Natus, iusto consequuntur non neque similique, delectus ipsum </span>
                        </div>
                        <div className='lg:mt-0 md:mt-0 mt-2' >
                            <Link to="/joinus">
                                <button className='bg-transparent border hover:text-white hover:bg-[#93C234] hover:border-white border-[#E84025] rounded-md w-[150px]  text-[#E84025] lg:p-4 p-2 text-[18px]'>Find More</button>
                            </Link>
                        </div>
                    </div>
                    {
                        jobs.map((item, index) => (
                            <div className='col-lg-4 col-md-6 my-4' key={index}>
                                <div style={{ boxShadow: "0px 2.5px 0px 0px rgba(0,0,0,0.30)" }} className='border rounded-md  '>
                                    <div>
                                        <img className='w-full rounded-md ' src={`${HOSTNAME}${item?.job_image_url
}`} alt="service" />
                                    </div>
                                    <div className='bg-[#f6f6f6] px-3 py-4  '>
                                        <h1 className='text-2xl font-semibold uppercase mb-3'>{Truncate(item?.job_title, 20)}</h1>
                                        <h6 className='text-gray-400'>{Truncate(item?.description,30)}</h6>
                                        <div className='flex justify-between items-center'>
                                            <div className='text-gray-400 text-xs'><span>{item?.jobtype}</span></div>
                                            <div>{item?.jobclass}</div>
                                            <div>
                                                <Link to="/detail">
                                                    <button className='bg-gradient-to-r from-[#E84025] to-[#68423B] hover:bg-green-600 text-white px-5 py-3 rounded-lg text-base'>Apply</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div >
        </Layout>
    )
}

export default Carrier