import React,{useState , useEffect} from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { callPublicApi } from '../../utils/CallApi'
import moment from 'moment/moment'
const Experience = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {

        let payload = {
            "sortproperty": "created_at",
            "sortorder": -1,
            "offset": 0,
            "limit": 50
        }

        let fetch = async () => {
            try {
                let res = await callPublicApi('/jobspublic/listjobsforpublic', 'post', payload)
                setJobs(res?.data?.jobs)
            }
            catch (err) {

            }
        }
        fetch()
    }, [])


    return (
        <div className='bscontainer mb-2 experience'>
            <div className='pt-[20px] pb-[3rem] flex md:flex justify-between items-center experience_container'>
                <h2 className='text-[25px] font-semibold'>{jobs?.length} User Experience Jobs</h2>
                {/* <div className='flex items-center heading_exp '>
                    <HiOutlineChevronLeft className='cursor-pointer' />
                    <h2 className='text-sm'>Page 4 to 2 </h2>
                    <HiOutlineChevronRight className='cursor-pointer' />

                </div> */}
            </div>
            <div className='row'>
                {
                    jobs.map((item, i) => (

                        <div className='col-lg-3 col-md-6 col-sm-6 mt-2' >
                            <div className='border rounded-md p-0 pb-2 hover:bg-[#93C234] hover:text-white cursor-pointer'>
                                <div className='p-3'>
                                    <div className='flex  justify-between pt-3'>
                                        <h2 className='text-[13px] font-semibold'>{item?.job_title}</h2>
                                        {/* <span className='text-[13px] font-semibold'>Now </span> */}
                                    </div>
                                    <div className='flex  justify-between pt-3'>
                                        <h2 className='text-[13px] flex items-center font-semibold'> <IoLocationOutline />{item?.physicalLocation?.city} {item?.physicalLocation?.country}</h2>
                                        <span className='text-[13px] font-semibold'>{moment(item?.created_at).format('ll')}</span>
                                    </div>
                                </div>

                                <hr className='w-full' />

                                <div>
                                    <p className='text-justify p-2 font-Poppins text-[14px]'>{item?.description} </p>
                                </div>
                                <div className='text-center'>
                                    <Link to="/detail">
                                        <button className=' rounded-full bg-[#DB4446] text-white text-[14px] w-[120px] h-10 hover:bg-white hover:text-black '>Apply Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>

        </div >
    )
}

export default Experience