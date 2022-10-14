import React from 'react'
import { Card } from 'react-bootstrap'
import { AddToCartBtn } from '../../Globals/Globals'
import { EVendorImg, EVendorImgContainer, EVendorMiniImg, MiniPharmImg, EVendorCardMain } from './StyledEVendor'



const EVendorCard = ({ number, img, flag, flag1, miniImg, Flag_of_Canada }) => {

    return (
        <EVendorCardMain>
            <Card number={number} >
                <div className='EVendorCard-main' >
                    <EVendorImgContainer>
                        <MiniPharmImg src={miniImg} alt={miniImg} />
                        <div className="overlay"></div>
                        <div className="EVendorImg-inner-overlay">
                            <AddToCartBtn>Add to Cart</AddToCartBtn>
                        </div>
                        <EVendorImg className='img-fluid' src={img} alt={img} />
                    </EVendorImgContainer>
                </div>
            </Card>
            <div className='d-flex'>
         
                {
                    number === 0 ||number===3?
                        <>
                            <EVendorMiniImg className='img-fluid' src={flag} alt="flags" />
                            <EVendorMiniImg className='img-fluid  ms-2' src={flag1} alt="flags" />
                        </>
                        : number ===2|| number ===5 ? (<EVendorMiniImg className='img-fluid  ms-2' src={Flag_of_Canada} alt="flags" />
                        ) :
                           ( <EVendorMiniImg className='img-fluid' src={flag} alt="flags" />)
                }

            </div>


        </EVendorCardMain>

    )
}

export default EVendorCard