import React, { useState, useEffect } from 'react'
import comming_soonvideo from "../../assets/videos/comming-soon.mp4"
import Countdown from '../CountDownTimer/CountDownTimer'
import TopForm from '../TopForm/TopForm'
import sabadelLogo from "../../assets/images/sabadel.png"
import worldBankLogo from "../../assets/images/world.png"
import ReadMore from '../readmore/readmore'
// import { Translator, Translate } from 'react-auto-translate';
import { RiMessage2Line } from 'react-icons/ri'
import { Link } from "react-router-dom"
import './style.css'
import axios from 'axios';
const CommingSoon = () => {
    const [countryCode, setcountryCode] = useState("SE")
    useEffect(() => {
        (async () => {
            const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
            const currentCountryCode = response.data.location.country.code
            setcountryCode(currentCountryCode)
        })();
    }, [])

    return (
        <>
            <section className="showcase relative">

                <video src={comming_soonvideo} autoPlay muted loop />
                <div className="overlay" />
                <div className="text_wrapper ">
                    <div className='text '>
                        <h2>Coming </h2>
                        <h4>Something Awesome is Coming</h4>
                        <h3>THERAPEUTICS</h3>
                        <h5>The life saved may be your own!</h5>

                        <p>
                            <span className='truth_block text-blue-600'>TRUTH THROUGH SCIENCE</span>
                            <div className='link_wrapper'>
                                <span>
                                    <a href="https://www.science.org/doi/10.1126/sciadv.abi6110" target="_blank" rel="noopener noreferrer" className='text_link text-left mb-1 '>
                                        “The University of Chicago Medical Center (UChicago Medicine) finds that Cannabidiol inhibits SARS-CoV-2
                                        replication through induction of the host ER stress and innate immune responses”.
                                    </a>
                                    <br />
                                    <small className='source'>SOURCE: The University of Chicago Medical Center linked above for veracity</small>
                                </span>
                            </div>
                            <br />
                            <ReadMore>
                                The University Of Chicago Medical Center (UChicago Medicine)
                                conducted the study of a similar species origins in the Cannabis sativa plant which
                                form the basis of therapeutic organic cultivars usage by patients who suffered from “severe acute respiratory syndrome"
                                cause by contracting coronavirus 2 (SARS-CoV-2) and effects of the current outbreak of coronavirus disease
                                (COVID-19) and it smells virulent variants variant B.1.1.7 (a.k.a 20I/501Y.V1) [17],
                                the South Africa variant B.1.351 (a.k.a 20H/501Y.V2) [18], the Brazilian variant P.1
                                (a.k.a 20J/501Y.V3) [19], and the India variant B.1.617 [20] have been circulating worldwide,
                                including the United States (US) and Spain. These variants contain mutations on the S
                                protein RBD and are widely speculated to make SARS-CoV-2 more infectious. Specifically,
                                all three variants involve RBD mutation N501Y, whereas the South Africa and Brazilian variants
                                also contain RBD mutations E484K and K417N. The Cannabis sativa cultivars have demonstrated
                                significantly correlated reduction in COVID-19 positivity and considered to be one Of the
                                most positive Inhibits SARS-CoV-2 that's they have far examined by scientific inquisitors.
                                The Cannabis sativa cultivars product available on the HPO Rx platform focuses specifically I'm clinical
                                outcomes using cultivated wellness, its products and services which demonstrates a compounding
                                positive biological effect as patients have consumed these cultivars. The aforementioned discovery,
                                covered by truth through science has shown promising in Academic science peer reviews,
                                you will discover by a plain language search on the topic across the Internet,
                                and continues to be examined by clinical organizations all over the world.
                                Please join us by registering for our alert below. The moment The Centers for Disease Control
                                (CDC) and The European Center for Disease Prevention and Control releases further information
                                in this area in their quest to save lives and heal families devastated by the Hunan health consequences
                                and mental health issues exacerbated by this recent pandemic.
                            </ReadMore>
                            {/* <Translator from='en' to='es' googleApiKey='API_KEY'   >

                                <h1><Translate>Welcome!</Translate></h1>

                            </Translator> */}
                            <p className='abstrct_text'>
                                Welcome! We are the human stewards of this planet and each other, either we’re all safe or no one is safe. Please join us by registering for our medical alert below.
                                <br />
                                <span className='flex flex-col mt-3'></span>
                                Dr. De Mandeville.<br />
                                <small className="date_small">Circa August 1, 2022</small>
                            </p>

                        </p>

                        <div className="couter_data">
                            <Countdown date="September 30 2022 12:44 GMT+2" />
                        </div>

                        <div className="form_data">
                            <TopForm countryCode={countryCode} />
                        </div>

                        <div className="info_text">
                            <span  > The web portal is under construction. Will be here soon with our awesome website!
                                Subscribe to be notified!
                            </span>
                        </div>

                        <div className="company_info_name text-red-600">
                            <span>A Fairman Company</span>
                        </div>


                    </div>
                    <div className="bottom_block flex justify-between item-center relative mt-5 ">
                        <div className="bottom_block_left">
                            <div className="logo_first text-center text-1xl text-red-600 font-samibold">
                                <img className=' w-[130px]' src={sabadelLogo} alt="sabadel" />

                            </div>
                        </div>

                        <div className="bottom_block_center ">
                            <div className="company_detail">
                                <h5>A Public Service Company</h5>
                                <span>COPYRIGHT © 2022 HPORX LIMITED, IRELAND.</span>

                            </div>
                        </div>

                        <div className="bottom_block_right">
                            <div className="world_logo text-center text-1xl text-red-600 font-samibold">
                                <img className='w-[160px] ' src={worldBankLogo} alt="world bank" />

                            </div>
                        </div>

                    </div>

                </div>
                <Link to="/user-feedback">
                    <div className='user-feedback fixed bottom-[50px] right-10 w-12 '>
                        <div className="rounded-full border bg-white p-3">
                            <RiMessage2Line className='text-[22px]' />
                        </div>
                        <span className='text-white text-[14px] text-center ml-[-8px]'>

                            Feedback
                        </span>
                    </div>
                </Link>

            </section>



        </>
    )
}

export default CommingSoon