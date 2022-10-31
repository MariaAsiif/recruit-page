import React, { useState } from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { PrimaryHeading, ViewMoreBtn } from '../../Globals/Globals'
import ChillumsSlick from './ChillumsSlick'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { ChillumMainContainer, ChillumSubHeading, ChillumViewMoreBtn } from './StyledChillums'
const Chillum = ({ id }) => {

    const [active, setActive] = useState('');


    const activeCollapes = (index) => {
        if (index === active) {
            setActive('')
        }
        else {
            setActive(index)

        }
    }

    return (
        <div className='bscontainer-fluid' id={id}>
            <ChillumMainContainer>
                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item onClick={() => activeCollapes(0)}>
                        <Accordion.Header>
                            CHILLUMS
                            {
                                active === 0 ?
                                    <AiOutlineMinus style={{ fontSize: '25px', marginTop: '10px', float: 'right' }} />
                                    :
                                    <AiOutlinePlus style={{ fontSize: '25px', marginTop: '10px', float: 'right' }} />
                            }
                        </Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                <div className="accordion-item ml-[30px] mr-[30px] bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        lg:grid
        md:grid
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
      " type="button" data-bs-toggle="collapse" style={{ justifyContent: 'inherit' }} data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            <h2 className='lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-medium text-black'> CHILLUMS</h2>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body py-4 px-5">
                            <ChillumSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</ChillumSubHeading>
                        </div>
                    </div>
                </div>


                <ChillumsSlick />
            </ChillumMainContainer>
        </div>
    )
}

export default Chillum





















