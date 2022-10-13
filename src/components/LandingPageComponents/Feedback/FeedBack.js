import React from "react";
import { Container } from "react-bootstrap";
import { RiMessage2Line } from "react-icons/ri";




const FeedBack = () => {

  return (
    <Container>
      <div style={{ zIndex: '8888', cursor: 'pointer',  }}>
        <a target="_blank" rel="noopener noreferrer" href="https://coming-soon-new.vercel.app/user-feedback">
          <div style={{ position: 'fixed', right: '60px', bottom: '10px', cursor: 'pointer',  }}>
            <div style={{ borderRadius: '60px', paddingTop: '12px', width: '50px', height: '50px', paddingLeft: '12px', backgroundColor: 'gray' }}>
              <RiMessage2Line style={{ fontSize: '25px', color: 'white' }} />
            </div>
            <span style={{ fontSize: '15px', color: 'black', fontWeight: '500' }}>
              Feedback
            </span>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default FeedBack
