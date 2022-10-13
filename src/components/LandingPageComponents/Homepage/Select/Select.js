import * as React from "react";
import { Field, ErrorMessage } from "formik";
import "./Select.css";

export default function Select({ title, name, defaultOption }) {
  // const options = ['Select Option', 'no', 'other']

  return (
    <>
      {/* <label className='select-label' >{title}</label>
      <select  defaultValue={options[0]} className='select' name={name}>
        {options.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select> */}
      <label className="select-label mb-4">{title}</label>
      <Field as="select" name={name}>
        <option value="">{`${defaultOption}`}</option>
        <option value="no">no</option>
        <option value="others">others</option>
      </Field>
      {/* <ErrorMessage /> */}
    </>
  );
}
