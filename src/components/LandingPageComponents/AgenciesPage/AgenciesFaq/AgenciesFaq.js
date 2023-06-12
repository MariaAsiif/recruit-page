import React, { useContext, useState } from "react";
import {
  Accordion,
  Card,
  AccordionContext,
  useAccordionButton,
  Container,
} from "react-bootstrap";
import faqPlusIcon from "../../../../assets/landingImages/faqPlusIcon.svg";
import faqMinusIcon from "../../../../assets/landingImages/faqMinusIcon.svg";
import { AgenciesFaqContainer, AgenciesFaqMain } from "./AgenciesStyle";

const AgenciesFaq = () => {


  const [accordianIcon, setAccordianIcon] = useState(false)
  const [saveAccordianKey, setsaveAccordianKey] = useState(0)


  const faqAccordianHandler = (e) => {
    if (e === saveAccordianKey) {
      setsaveAccordianKey('')
    }
    else {
      setsaveAccordianKey(e)

    }
  }


  return (

    <Container>
      <AgenciesFaqMain>
        <h3 className="faq-head">Answers to your questions</h3>
        <AgenciesFaqContainer>
          <Accordion defaultActiveKey={[0]} alwaysOpen>
            {
              Array.from({ length: 5 }).map((no, i) => (
                <Accordion.Item key={i} eventKey={i}>
                  <Accordion.Header onClick={() => faqAccordianHandler(i)} >
                    <div className="faq-header" >
                      {saveAccordianKey === i ? (
                        <img src={faqMinusIcon} alt='faqMinusIcon' />

                      ) : (
                        <img src={faqPlusIcon} alt='faqPlusIcon' />
                      )}
                      <p>In iaculis leo quis massa sodales pellentesque aliquam nisi. Eu sed volutpat mi vitae netus a sollicitudin.</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>Id volutpat et pharetra urna turpis cras neque, massa. Nulla semper nunc id adipiscing felis varius et. Dictum mauris sem elit turpis commodo tristique massa, mi placerat. Risus condimentum id tincidunt mauris, sit id amet. Tristique rhoncus tellus, nisl sit sapien ipsum massa consectetur pretium. Auctor adipiscing in ut morbi consequat, maecenas vulputate. Volutpat elementum lorem at bibendum nec quisque nec.Auctor adipiscing in ut morbi consequat, maecenas vulputate. Volutpat elementum lorem at bibendum nec quisque nec.Auctor adipiscing in ut morbi consequat, maecenas vulputate. Volutpat elementum lorem at bibendum nec quisque nec. </Accordion.Body>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </AgenciesFaqContainer>
      </AgenciesFaqMain>

    </Container>
  );
};

export default AgenciesFaq;
