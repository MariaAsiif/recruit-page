import React from 'react'
import { Container } from 'react-bootstrap'
// import { PrimaryHeading } from '../../Globals/Globals'
import AgricultureImgSection from './AgricultureImgSection'
import AgricultureSlick from './AgricultureSlick'
import { AgricultureMainContainer, AgricultureTertiaryHeading, AgriHeading } from './StyledAgriculture'
const Agriculture = ({ id }) => {
    return (
        <div id={id}>
            <AgricultureMainContainer >
                <div className="bscontainer-fluid">
                    <AgriHeading>
                    Controlled Environment Agriculture
                    </AgriHeading>
                    <AgricultureTertiaryHeading>
                    Grow profits, profit from your grow
                    </AgricultureTertiaryHeading>
                    <AgricultureImgSection />
                    <AgricultureSlick />
                </div>
            </AgricultureMainContainer>
        </div>
    )
}
export default Agriculture