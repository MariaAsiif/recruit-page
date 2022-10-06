import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterSection, { TradingAddress } from './FooterSection'
import { FooterImg, FooterImg1, FooterMainContainer, TradingAddressList, TradingAddressMain } from './StyledFooter'
import './Footer.css';
import usa from '../../../../assets/landingImages/usa.png'
import flag from '../../../../assets/landingImages/flag.svg'
import mail from '../../../../assets/landingImages/mail.png'
import footerLogo from '../../../../assets/landingImages/footer-logo.png'

const Footer = () => {
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
    const registeredAddress = [
        ' Avenue Ceramique 00221 6221KX Maastricht, Limburg, Holland',

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
    return (
        <FooterMainContainer>
            <Container>
                <Row>
                    <Col md={2} sm={6} xs={12}>
                        <TradingAddressMain>
                            <div><h4>
                                TRADING ADDRESS
                            </h4>
                                <TradingAddressList>
                                    <ul>
                                        <p className='footer-link fs-5' href="#">
                                            European Union Administration
                                        </p>
                                        <p className='footer-link'>

                                            Correos No 77
                                        </p>

                                        <p className='footer-link'>

                                            Plaça de la Font, 12
                                        </p>
                                        <p className='footer-link'>

                                            08880 Cubelles Barcelona
                                        </p>
                                    </ul>
                                </TradingAddressList>

                            </div>
                        </TradingAddressMain>



                        <TradingAddressMain>
                            <div><h4 className='fs-3'>
                                REGISTERED ADDRESS
                            </h4>
                                <TradingAddressList>
                                    <ul>
                                        {
                                            registeredAddress.map((link, index) => (
                                                <p key={index} className='footer-link' href="#">
                                                    {link}
                                                </p>
                                            ))
                                        }


                                    </ul>
                                </TradingAddressList>

                            </div>
                        </TradingAddressMain>


                        <TradingAddress links={callCenter} heading={'CALL CENTER'} />
                        <ul class="list-unstyled footer-ul">

                            <li class="mb-1">
                                <span>
                                    <FooterImg className='img-fluid' src={flag} alt={flag} /><span class="footer-span">+1 (213) 370
                                        0873</span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <FooterImg className='img-fluid' src={usa} alt={mail} />
                                    <span class="footer-span">
                                        +31 938 022
                                        780</span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <FooterImg className='img-fluid' src={mail} alt={mail} /><span
                                        class="footer-span">assist@hporx.com</span>
                                </span>
                            </li>
                        </ul>
                        <div>
                            <a href="https://unsdg.un.org/2030-agenda/universal-values/leave-no-one-behind" target="_blank" rel="noopener noreferrer">
                                <FooterImg1 src={footerLogo} alt="footer-logo" />
                            </a>
                        </div>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <div className='sm-12 col-md' >
                                <FooterSection links={company} heading={'COMPANY'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={marketplace} heading={'MARKETPLACE'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={medical} heading={'MEDICAL'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={advertising} heading={'ADVERTISING'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={community} heading={'COMMUNITY'} />
                            </div>
                        </Row>
                        <Row>
                            <div className='sm-12 col-md' >
                                <FooterSection links={aToZ} heading={'A to Z SITE INDEX'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={partners} heading={'PARTNERS'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={services} heading={'SERVICES'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={affiliates} heading={'AFFILIATES'} />
                            </div>
                            <div className='sm-12 col-md'>
                                <FooterSection links={helpCenter} heading={'HELP CENTER'} />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </FooterMainContainer>
    )
}

export default Footer