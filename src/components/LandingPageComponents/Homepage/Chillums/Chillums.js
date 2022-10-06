import React,{ useState } from 'react'
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
                <Accordion defaultActiveKey="0">
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
                            <ChillumSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</ChillumSubHeading>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <ChillumsSlick />
            </ChillumMainContainer>
        </div>
    )
}

export default Chillum





















