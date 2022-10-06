import React from 'react'
import { VaporizeImg1, VaporizeImg2, VaporizeImagesContainer, VaporizeViewMoreBtn, VaporizeImg2Container, VaporizeSubHeading } from './StyledVaporize'
import vaporize1 from '../../../../assets/landingImages/vaporize1.png'
import vaporize2 from '../../../../assets/landingImages/vaporize2.png'
import { Row, Col, Modal } from 'react-bootstrap';
import PlayBtn from '../../Globals/PlayBtn';
import { PlayBtnContainer, PrimaryHeading } from '../../Globals/Globals';
import VideoModal from '../Header/VideoModal';
import HomeModal from '../Header/Modal'
import MyVerticallyCenteredModal from '../Header/Modal';
import Modals from '../Header/Modal';


const VaporizeSlickCard = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>

            <Row className='justify-content-between   align-items-center'>
                <Col sm={12} md={6}>
                    <VaporizeImagesContainer>
                        <VaporizeImg1 className='img-fluid' src={vaporize1} alt={vaporize1} />
                        <VaporizeImg2Container>
                            <div className='inner-overlay'>
                                <PlayBtn />
                            </div>
                            <VaporizeImg2 className='img-fluid' src={vaporize2} alt={vaporize2} />
                        </VaporizeImg2Container>
                        <PlayBtnContainer />
                    </VaporizeImagesContainer>
                </Col>
                <Col sm={12} md={6}>
                    <PrimaryHeading>VAPORIZE</PrimaryHeading>
                    <VaporizeSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</VaporizeSubHeading>
                    <VaporizeViewMoreBtn>view more</VaporizeViewMoreBtn>
                </Col>
            </Row>
        </div>
    )
}

export default VaporizeSlickCard