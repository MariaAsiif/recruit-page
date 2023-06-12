import React from 'react';
import { Field} from 'formik';
function Select({label, name, title , list}){
    return(<div className='select'>
              {/* <label for="inputCountry" className='label-locator'>{label}</label> */}
              <Field as="select" name={name} >
                <option value="">
                   {title}   
                 </option>
                { list.map((v)=>
                  <option value={v}>{v}</option>
                   )}
              </Field>
              {/* <select id="inputCountry" name={name}>
                <option selected>{placehoder}</option>
                <option>...</option>
              </select> */}
    </div>);
}
export default Select; 

