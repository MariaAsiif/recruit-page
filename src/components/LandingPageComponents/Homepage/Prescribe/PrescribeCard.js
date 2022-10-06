import React from 'react'
import { PrescribeBtn, PrescribeImg, PrescribeImgContainer , ShopBtn} from './StyledPrescribe';

const PrescribeCard = ({ img }) => {
    return (
        <PrescribeImgContainer className='card-overlay'>
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                <h3>About</h3>
                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet.</p>
                <PrescribeBtn>Appointment</PrescribeBtn>
            </div>
            <PrescribeImg  src={img} alt={img} />
        </PrescribeImgContainer >
    )
}

export default PrescribeCard