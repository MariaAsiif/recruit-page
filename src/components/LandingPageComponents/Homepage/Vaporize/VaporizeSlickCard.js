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

                    <div class="accordion-item bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingTwo">
                            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-4
        text-base text-gray-800 
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" style={{display:'grid' , justifyContent:'inherit'}} data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                <PrimaryHeading>VAPORIZE</PrimaryHeading>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body py-4 px-5">
                                <VaporizeSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</VaporizeSubHeading>
                            </div>
                        </div>
                    </div>



                    <VaporizeViewMoreBtn>view more</VaporizeViewMoreBtn>
                </Col>
            </Row>
        </div>
    )
}

export default VaporizeSlickCard