import React from 'react'
import { TertiaryHeading } from '../../Globals/Globals'
import GrowProfitSlick from './GrowProfitSlick'
import { GrowProfitHeading, GrowProfitMainContainer, GrowProfitSubHeading, } from './StyledGrowProfit'

const GrowProfit = ({id}) => {
    return (
        <div>
        <GrowProfitMainContainer id={id}>
            <div className='text-center'>
            <GrowProfitHeading>
            Agriculturists
            </GrowProfitHeading>
            <GrowProfitSubHeading>
            Grow profits, profit from your grow
            </GrowProfitSubHeading>
            <TertiaryHeading>
            Delivered turnkey and ready to grow guarantee profits
            </TertiaryHeading>
            </div>
            <GrowProfitSlick/>
        </GrowProfitMainContainer>
        </div>
    )
}

export default GrowProfit