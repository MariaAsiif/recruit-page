import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { StatisticsImg, StatisticsImgContainer, StatisticsMainContainer, StatisticsTextContainer } from './StyledStatistics'
import static1 from '../../../../assets/landingImages/static1.svg'
import static2 from '../../../../assets/landingImages/static2.svg'
import static3 from '../../../../assets/landingImages/static3.svg'
import static4 from '../../../../assets/landingImages/static4.svg'
import static5 from '../../../../assets/landingImages/static5.svg'
import { BsFillStarFill } from "react-icons/bs";
import { PrimaryHeading } from '../../Globals/Globals'
import { FaStar } from "react-icons/fa";
const Statistics = () => {
    const cards = [{
        image: static1,
        revenue: '4.2',
        mini: 'Trillion',
        p1: 'MEDICAL MARIJUANA',
        p2: 'INDUSTRY VALUATION',
    }, {
        image: static1,
        revenue: '67',
        mini: '',
        p1: 'AWARDED LICENSES IN ',
        p2: 'FOURTEEN STATES',
    }, {
        image: static2,
        revenue: '4,781',
        mini: '',
        p1: 'MEDICAL MARIJUANA',
        p2: 'INDUSTRY VALUATION',
    }, {
        image: static3,
        revenue: '150t',
        mini: '',
        p1: 'MEDICAL MARIJUANA',
        p2: 'INDUSTRY VALUATION',
    }, {
        image: static4,
        revenue: '400%',
        mini: '',
        p1: 'MEDICAL MARIJUANA',
        p2: 'INDUSTRY VALUATION',
    },]
    return (
        <StatisticsMainContainer>
            <Container>
                <h1>Statistics</h1>
                <Row className=' p-0 '>
                    {
                        cards.map((data, index) => {
                            const { image,
                                revenue,
                                p1,
                                p2, mini } = data;
                            return (
                                <div className='p-3 col-lg col-md-4 col-sm-6 col-xs-12' key={index}>

                                    <Card className='card-container'>

                                        <StatisticsImgContainer>

                                            <StatisticsImg src={image} alt={image} />
                                        </StatisticsImgContainer>
                                        <StatisticsTextContainer>
                                            <div className="d-flex align-items-center">
                                                <h3 >{revenue}

                                                </h3>
                                                <div className='d-flex flex-column ml-5'>
                                                    <span className='icon' > {
                                                        index === 0 ? <BsFillStarFill   /> : null
                                                    }</span>
                                                    <span className='mini'>{mini}</span>
                                                </div>

                                            </div>
                                            <p className="mb-2">{p1}</p>
                                            <p class>
                                                {p2}
                                            </p>
                                        </StatisticsTextContainer>

                                    </Card>

                                </div>
                            )
                        }
                        )
                    }
                </Row>
                <p className='source-world'>Source: <span><FaStar size={7} color='red'/> </span> World Trade Organization (40-% of which is USA/CANADA and 31% European Union) 7/ 2021</p>
            </Container >
        </StatisticsMainContainer>
    )
}

export default Statistics