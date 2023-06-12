import React, { useEffect, useState } from 'react'
import { ResumeBanner } from '../components/Banner/Banners'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'
import Detail from '../components/ResumeDetail/Detail'
import { callApi, callPublicApi } from '../utils/CallApi'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Resume = () => {
    const [jobs, setJobs] = useState([])

    const id = useParams().id

    const token = useSelector((state) => state.recruitAuth?.loginInfo)


    useEffect(() => {
        let payload = {
            "jobid": id
        }
        let fetchApi = async () => {
            try {
                let res = await callApi('/jobs/findJobById', 'post', payload)
                setJobs(res?.data)
            }
            catch (err) { }
        }
        let fetchPuclicApi = async () => {
            try {
                let res = await callPublicApi('/jobspublic/findJobByIdPublic', 'post', payload)
                setJobs(res?.data)
            }
            catch (err) { }
        }

        if (token) {
            fetchApi()
        }
        else {
            fetchPuclicApi()
        }

    }, [])

    return (
        <Layout>
            <ResumeBanner />
            <div className='lg:mt-[2rem] detail_page'>
                <Detail jobs={jobs} />
                <hr className='w-full mt-3' />
                <Footer />
            </div>
        </Layout>
    )
}

export default Resume