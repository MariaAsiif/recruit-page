import React from 'react'
import { CultivationiImg, CultivationImgContainer } from './StyledCultivation';
import { AddToCartBtn } from '../../Globals/Globals';
const CultivationCard = ({ heading, description, img }) => {
    return (
        <CultivationImgContainer>
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                <AddToCartBtn>Add to Cart</AddToCartBtn>
            </div>
            <CultivationiImg className='img-fluid' src={img} alt={img} />
            <div className='product-description'>
                <h3>
                    {heading}
                </h3>
                <p>
                    {description}
                </p>
            </div>
        </CultivationImgContainer>
    )
}

export default CultivationCard