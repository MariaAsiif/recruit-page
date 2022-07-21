import React from 'react'

const ServiceBlog = () => {
    return (
        <>
            <div className="service_wrapper">
                <div className="row flex-column-reverse flex-lg-row flex-md-row flex-sm-row">
                    <div className="col-md-6">
                        <div className="service_heading">
                            <h2>Business development</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, earum fugiat eos harum excepturi placeat mollitia adipisci dicta minima magni eum sequi recusandae, delectus repellat? Eum atque quas sed! Nostrum.</p>
                            <button className="btn-green">Applied</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service_image">
                            <img src="/assets/Images/categories/sales.jpg" alt="service_image" />
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <div className="service_image">
                            <img src="/assets/Images/categories/sales.jpg" alt="service_image" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service_heading">
                            <h2>Sales representatives</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, earum fugiat eos harum excepturi placeat mollitia adipisci dicta minima magni eum sequi recusandae, delectus repellat? Eum atque quas sed! Nostrum.</p>
                            <button className="btn-red">Apply</button>
                        
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceBlog