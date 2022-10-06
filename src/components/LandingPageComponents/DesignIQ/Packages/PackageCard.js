import React from 'react'
import { GetStartBtn, InnerCard, OfferImg, PackageCardMain, PackageNameBox, PackOffer } from './StyledOurPackages'


const PackageCard = ({ name, price, benefits }) => {
    return (
        <>
            <PackageCardMain>
                <PackageNameBox>
                    <h3>{price}</h3>
                    <p>{name}</p>
                </PackageNameBox>
                <InnerCard>
                    <p className='include'>What's included</p>
                    {
                        benefits.map((data, index) => {
                            const { title, img } = data
                            return (
                                <PackOffer key={index}>
                                    <span><OfferImg src={img} alt={img} /></span>
                                    <p>{title}</p>
                                </PackOffer>
                            )
                        })
                    }
                    <GetStartBtn>
                        Get Started
                    </GetStartBtn>
                </InnerCard>

            </PackageCardMain>
        </>
    )
}

export default PackageCard