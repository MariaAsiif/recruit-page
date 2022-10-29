import React, { useContext } from 'react'
import { AccordionContext, useAccordionButton } from 'react-bootstrap';
import { AccordionValue } from './FrequentAsked';

export default function ContextAwareToggle({ children, eventKey, callback,message }) {
    const sendValue=useContext(AccordionValue)
    const { activeEventKey } = useContext(AccordionValue);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  sendValue(isCurrentEventKey)
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

