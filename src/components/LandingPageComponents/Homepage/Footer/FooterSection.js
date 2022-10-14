import React from 'react'
import { TradingAddressList, TradingAddressMain } from './StyledFooter'

const FooterSection = ({ links, heading }) => {
    return (
        <div><h4>
            {heading}
        </h4>
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index} >
                            <a  className='footer-link' href="#">
                                {link}
                            </a>
                        </li>
                    ))
                }
                {/* <a className='footer-link' href="#">
                        European Union Administration Correos No 77 Plaça de la Font, 12 08880 Cubelles Barcelona
                    </a> */}
            </ul></div>
    )
}

export default FooterSection

export const TradingAddress = ({ links, heading }) => {
    return (
        <TradingAddressMain>
            <div><h4>
                {heading}
            </h4>
            <TradingAddressList>
                <ul>
                    {
                        links.map((link, index) => (
                            <p key={index} className='footer-link' href="#">
                                {link}
                            </p>
                        ))
                    }
                    {/* <a className='footer-link' href="#">
                    European Union Administration Correos No 77 Plaça de la Font, 12 08880 Cubelles Barcelona
                </a> */}
                
            </ul>
                </TradingAddressList>

                </div>
        </TradingAddressMain>
    )
}