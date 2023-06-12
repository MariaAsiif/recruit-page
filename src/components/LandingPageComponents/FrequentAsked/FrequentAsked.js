// import React, { createContext } from "react";
// import { Accordion, Card, Container } from "react-bootstrap";
// import { FrequentAskedMain, PlusImg } from './StyledFrequentAsk'
// import plus from '../../assets/plus.svg';
// import './Accordion.css'

import React,{ useContext } from "react";
import { Accordion, AccordionContext, Card, Container, useAccordionButton } from "react-bootstrap";


// export const AccordionValue=createContext(); 
//    const FrequentAsked=()=> {
//        const getValue=(value)=>{
//            console.log(value)
//        }

//     return (
//         <Container>
//             <FrequentAskedMain>
//             <section class="faq-section">
//             <img class="faq-bg" src="assets/images/faq-bg.svg" alt="faq-bg-image"/>
//             <div class="title">
//                 <h2>Frequently Asked Questions</h2>
//                 <hr/>
//             </div>
//             <div class="accordion" id="accordionExample">

//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
//                             <i class="fa fa-plus"></i>
//                             <span> Dove si monta S.I.R.E.?</span>
//                         </button>
//                     </div>
//                     <div class="collapse show" id="collapseOne" data-parent="#accordionExample">
//                         <div class="card-body">
//                             S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra 
//                         </div>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
//                             <i class="fa fa-plus"></i> 
//                             <span>Chi monta l’impianto S.I.R.E.?</span>
//                         </button>
//                     </div>
//                     <div class="collapse" id="collapseTwo" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Un tecnico specializzato Solar Innovatio sarà responsabile dell’installazione del sistema
//                         </div>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree">
//                             <i class="fa fa-plus"></i> 
//                             <span>Quanto tempo impiega l’installazione?</span>
//                         </button>
//                     </div>
//                     <div class="collapse" id="collapseThree" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Installazione, collaudo, formazione utente possono essere svolti all’interno di una singola giornata
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour">
//                             <i class="fa fa-plus"></i> 
//                             <span>E’ necessario richiedere autorizzazioni al condominio?</span>
//                         </button>
//                     </div>
//                     <div class="collapse" id="collapseFour" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Non è necessario. L’art. 1122bis del c.c. specifica che non ricorre nessun obbligo. E’ tuttavia consigliabile informare i condomini
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFive">
//                             <i class="fa fa-plus"></i> 
//                             <span>E’ necessario predisporre pratiche per il GSE?</span> 
//                         </button>
//                     </div>
//                     <div class="collapse" id="collapseFive" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Solar Innovatio si occupa di tutte le formalità burocratiche
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseSeven">
//                             <i class="fa fa-plus"></i> 
//                             <span>L’impianto è garantito?</span>
//                         </button>
//                     </div>
//                     <div class="collapse" id="collapseSeven" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Certamente, in aggiunta è possibile richiedere un’estensione di garanzia fino a 20 anni
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div class="card-header">
//                         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseSix">
//                             <i class="fa fa-plus"></i> 
//                             <span>E’ possibile usufruire di bonus fiscali?</span>
//                         </button>
//                     </div>
//                     <div class="collapse" id="collapseSix" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Si, in base alle normative in essere, il Team Solar Innovatio sarà felice di approfondire. Chiamaci per un approfondimento
//                         </div>
//                     </div>
//                 </div>


//             </div>

// </section>
//             </FrequentAskedMain>
//         </Container>
//     );
//   }
//   export default  FrequentAsked











































 function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

export default function Example() {
    return (
        <Container>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </Container>
    );
}