import React from 'react'
import { ShowCaseImg, ShowCaseMain } from './StyledShowCase'
import showCase from '../../../../assets/landingImages/showCase.jpg';
import { Container } from 'react-bootstrap';
const ShowCase = () => {
    return (
        <Container fluid className='p-0'>
            <ShowCaseMain>
                <ShowCaseImg src={showCase} />
            </ShowCaseMain>
        </Container>
    )
}

export default ShowCase