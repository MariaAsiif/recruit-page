import React from "react";
import {Placeholder} from 'react-bootstrap'

const SectionPlaceHolder = () => {
  return (
    <div className="container" >
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </div>
  );
};

export default SectionPlaceHolder;
