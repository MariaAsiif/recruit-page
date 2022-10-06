import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import StyleCard2 from './StyleCard2'
import CardData2 from './2ndCadData'
function Card2(){
    return(
    <StyleCard2>
    <div className='container'>
        <Row className='rows'>
        {CardData2.map((v , i )=>
            <Col key={i} lg={4} md={6}> 
                <Card className='cards'>
                    <div className='card-body text-center'>
                        <img src={v.bimg} alt="Service Image" className='icon-img'/>
                        <h3>{v.name}</h3>
                        <p>{v.paragraph}</p>
                    </div>
                </Card>
            </Col>
            )}
        </Row>
     </div>   
    </StyleCard2>);
}

export default Card2;