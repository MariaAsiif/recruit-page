import React from 'react'
import { PrimaryHeading, TertiaryHeading } from '../../Globals/Globals'
import CultivationSlick from './CultivationSlick'
import { CultivationMainContainer } from './StyledCultivation'


const Cutivation = ({id}) => {
    return (
        <CultivationMainContainer id={id} >
            <PrimaryHeading>Cultivation</PrimaryHeading>
            <p>Home Grow</p>
            <h3>Grow your dose privately at home</h3>
            <CultivationSlick />
        </CultivationMainContainer>
    )
}

export default Cutivation