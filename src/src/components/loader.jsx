import React from 'react'
import '../assests/preloader.css'
const Loader = () => {
    return (
        <>
            <div className='preloader_wrapper'>
                <div className="preloader_container">
                    <img src="/assets/Images/logo-curtain.png" alt="reward_img" />
                </div>
                <div className='preloader_over'></div>
            </div>
        </>
    )
}

export default Loader