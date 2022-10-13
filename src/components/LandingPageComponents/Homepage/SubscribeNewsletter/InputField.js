
import React from 'react';
import { Form} from 'react-bootstrap';
import {ErrorMessage,useField} from 'formik';

const InputField = ({ placeholder, type,label,...props }) => {
  const[field,meta]=useField(props);
 // console.log(field,meta,"Tabash");
  return (
    <Form.Group className="mb-3 subscribe-form" controlId="exampleForm.ControlInput1">
      <Form.Label className='input-label'>{label}</Form.Label>
      <Form.Control className={`input-field ${meta.touched && meta.error &&'is-invalid'}`} {...field} {...props} type={type} placeholder={placeholder} />
      <ErrorMessage className="error_show" name={field.name}/>
    </Form.Group>
     
  )
}

export default InputField