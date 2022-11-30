import React, { useState } from 'react'
import FooterSection from './FooterSection'
import usa from '../../images/usa.png'
import flag from '../../images/flag.svg'
import londonflag from '../../assets/landingImages/london.png'
import mail from '../../images/mail.png'
import footerLogo from '../../images/footer-logo.png'
import SSL from './SSL'
import CompanyLogo from './CompanyLogo'
import Terms from './Terms'


const Footer = ({type}) => {

    const [active, setActive] = useState(false)
    const [colorClass, setColorClass] = useState(false)
    const [op, setop] = useState()

    const ToggleSwitch = (data) => {
        console.log(data)
        if (data === true) {
            setActive(true)
            setop(0)
            setTimeout(() => {
                setColorClass(true)
                setop(1)
            }, 500);
        }
        else {
            setActive(false)
            setTimeout(() => {
                setColorClass(false)
            }, 500);

        }
    }

    const company = ['About Us',
        'Jobs ',
        ' Data Protection',
        'Privacy Policy',
        'Cookie Policy',
        'FAQ',
        ' Career Opportunities',
        'Investment Opportunities',
        'Teams']

    const marketplace = ['Fabric',
        'Finished Goods',
        '  Manufactured Goods',
        ' Health & Fitness',
        'Hygiene & Beauty ',
        'Edibles & Drink ',
        'Growth Materials',
        ' Lighting Equipment',
        ' Seeds & Flower',
        ' Sativa, Indica & Hybrids',
        'Vaporizers & Inhalants']
    const medical = ['Appointment Calendar',
        'Zoom Consultation',
        'Diagnose',
        ' Dispensaries',
        'Doctors Registry',
        ' Pharmacy',
        'Investor Opportunity']
    const advertising = ['Product Assessment',
        'Product TÜV Testing',
        'Product Placement',
        ' Product Advertising',
        'Product Marketing',
        'Assessment Policy',
        'Assessment Terms',
        'Assessment Conditions',
        'Advertising Campaigns',
        'Advertising Specifications',
        'Advertising Rate Card'];
    const community = ['News',
        'Legislation',
        'Agriculturist',
        ' Marijuana Medicine',
        'Glossary',
        'Blog & Vlog',
        'Events',
        ' YouTube Channel',
        ' Second Life Medical Devices']
    const trandingAdress = [
        'HPO Rx Limited',
        'European Retail Administration',
        "CORREOS MAIL • SHIPPING LOGISTICS • RECEIVING • RMA Correos N° 77 08880",
        'Cubelles Barcelona, Spain',
        // '08880 Cubelles Barcelona'
    ]
    const registeredAddress = [
        ' Law Offices',
        'European Legal Administration Avenue Céramique 00221 6221KX Maastricht, Limburg, Holland',
        'Reg N° NL 2020V0022818',
        'Tax N° NL 862241133B01'
    ]
    const callCenter = ['World Trade Center Barcelona', 'Muelle de Barcelona', 'Moll de Barcelona s/n', '08039 Barcelona Spain']
    const aToZ = ['Apparel',
        'Beauty',
        'Care',
        'Danger of dabbing',
        'Edibles',
        'Fenchol',
        'Genotype',
        'Hemp',
        'Indica',
        'Jelly hash',
        'Kief']
    const partners = ['B2B',
        ' SMB’s',
        ' Pharmaceutical Companies',
        'Manufacturer',
        'Distributers',
        'Wholesalers',
        'Retailers',
        'Private Sellers',
        'Competitions',
        ' Special Offers',
        'Clearances']
    const services = ['Store Example',
        'Store Consultation',
        'Dispensary Store Rental',
        ' Store Design',
        'Store Installation',
        ' Store Population',
        ' Store Marketing',
        ' Dispensary Architect',
        ' Dispensary Installation',
        'Dispensary Marketing']
    const affiliates = ['Affiliate Marketing',
        '  Affiliated Rewards',
        'How to be Affiliated ?']
    const helpCenter = ['Know Hemp',
        'Drug Intervention',
        '  Recall Notification',
        ' Legal Assistance',
        'Lawyers Registry',
        'Product Support',
        'Request',
        ' Special Order',
        'Feedback',
        ' Contact Us',
        'Chat']

        const Ixcon = ['lexicon list']

    return (
        <>
            <div style={{
                opacity: !active ? "0" : op === 0 ? "0" : "1",
                transition: " 3s ease-in-out",
            }}>
                {colorClass &&
                <div>
                    <div className={type === "landing" ? 'bscontainer-fluid' :'bscontainer'}>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4' >
                                <FooterSection data={trandingAdress} heading={'COMMERCIAL'} />
                                <FooterSection data={registeredAddress} heading={'REGISTERED'} />

                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4' >
                                <FooterSection data={company} heading={'COMPANY'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={marketplace} heading={'MARKETPLACE'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={medical} heading={'MEDICAL'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={advertising} heading={'ADVERTISING'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={community} heading={'COMMUNITY'} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4' >
                                <FooterSection data={callCenter} heading={'CALL CENTER'} />
                                <ul className='mt-3'>
                                    <li>
                                        <span className='flex'>
                                            <img src={flag} className="w-4 h-4 mr-2" alt="flag" />
                                            <span className='text-[12px] font-bold'>+(34) 938 022 780</span>

                                        </span>
                                    </li>

                                    <li>
                                        <span className='flex'>
                                            <img src={usa} className="w-4 h-4 mr-2" alt="flag" />
                                            <span className='text-[12px] font-bold'>+1 (213) 370  0873</span>

                                        </span>
                                    </li>
                                    <li>
                                        <span className='flex'>
                                            <img src={londonflag} className="w-4 h-4 mr-2 object-cover" alt="flag" />
                                            <span className='text-[12px] font-bold'>+(44) 1223 298541</span>

                                        </span>
                                    </li>

                                    <li>
                                        <span className='flex'>
                                            <img src={mail} className="w-4 h-4 mr-2" alt="flag" />
                                            <span className='text-[12px] font-bold'>+1 (213) 370  0873</span>

                                        </span>
                                    </li>
                                    <li>
                                        <a href="https://unsdg.un.org/2030-agenda/universal-values/leave-no-one-behind" target="_blank" rel="noopener noreferrer">
                                            <img src={footerLogo} className="w-20 " alt="footer-logo" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4' >
                                <FooterSection data={aToZ} heading={'A to Z SITE INDEX'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={partners} heading={'PARTNERS'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={services} heading={'SERVICES'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={affiliates} heading={'AFFILIATES'} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                                <FooterSection data={helpCenter} heading={'HELP CENTER'} />
                            </div>
                        </div>
                          <div className='row'>
                            {/* <div className='col-lg-2 col-md-4 col-sm-4' >
                                <FooterSection data={callCenter} heading={'CALL CENTER'} />
                                
                            </div> */}
                            <div className='col-lg-2 col-md-4 col-sm-4' >
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4'>
                            <FooterSection data={Ixcon} heading={'Lexicon'} />

                            </div>
                        </div>
                        <div className='ssl'>
                            <SSL />
                        </div>
                        <div className='horzental_line'>
                            <hr />
                        </div>

                    </div>

                    <div className='compay_logo'>
                        <CompanyLogo />
                    </div>
                </div>
                }   
            </div>
            <div >
                <Terms toggle={(value) => ToggleSwitch(value)} prev={active} />
            </div>

        </>
    )
}

export default Footer