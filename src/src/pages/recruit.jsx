import React from 'react'
import ImageUploader from '../components/imageUploader'
import Layout from '../components/layout'
import ServiceBlog from '../components/serviceBlog'
import SubHeader from '../components/subHeader'

const Recruit = () => {
    return (
        <Layout>
            <SubHeader />
            <div className="main_wrapper">
                <div className="container">
                    <div className="image_uploader">
                        <ImageUploader />
                    </div>
                    <div className="blog_wrapper">
                      <ServiceBlog/>
                    </div>
                </div>
            </div>


        </Layout >


    )
}

export default Recruit