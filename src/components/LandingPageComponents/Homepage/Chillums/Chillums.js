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
        px-5
        text-base text-gray-800
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            <h2 className='text-[3rem] font-medium text-black'> CHILLUMS</h2>
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





















