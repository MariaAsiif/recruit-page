import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeadingTerms, TermsMain } from './StyledTerms'
import Logo from '../../../assets/landingImages/Logo.png'
const Terms = () => {
    const Style={
        width:'2rem'
    }
    return (
        <TermsMain>
            <div className='bscontainer-fluid' >

                <Row>
                    <Col md={6}
                    >
                        <HeadingTerms>
                            Copyright © 2021 <span> <img src={Logo} style={Style}   alt="logo" /> </span> . All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information.
                        </HeadingTerms>
                    </Col>
                    <Col md={6}
                    >
                        <HeadingTerms>
                            RELIEF FROM CHRONIC PAIN IS A HUMAN RIGHT UNDER THE UNITED NATION CHARTER RESPECTED BY ALL UN COUNTRIES
                        </HeadingTerms>
                    </Col>
                </Row>
            </div >
        </TermsMain>
    )
}

export default Terms