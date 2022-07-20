import React, { useState } from 'react'
import { useEffect } from 'react'
// import CurtainRevealBox from 'react-curtain-reveal'

const Home = () => {
    const [load, setload] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setload(false)
        }, 2000);
    }, [])
    return (
        <div className="curtain">
            <div className="curtain__wrapper">
                <div className={load ? "curtain__panel " : " curtain__panel curtain__panel--left"}>
                </div>{" "}
                {/* curtain__panel */}
                <div className="curtain__content">
                    <img src="/assets/Images/logo-curtain.png" alt="reward_img" />
                    <h2>Hamp Oil!</h2>
                </div>
                <div className={load ? "curtain__panel " : " curtain__panel curtain__panel--right"}>

                    {/* <div className="curtain__panel curtain__panel--right"> */}
                </div>{" "}
                {/* curtain__panel */}
            </div>{" "}
            {/* curtain__wrapper */}
        </div>



    )
}

export default Home