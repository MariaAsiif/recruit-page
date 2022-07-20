import React, { useState } from 'react'
import { Title } from '../helper/nameTitle'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Textinput from '@mui/material/TextField/TextField';
import { PhoneInput } from "react-contact-number-input";
import { Country, State, City } from 'country-state-city';
import { Formik, Form, Field } from 'formik';
import { FormSchema } from '../helper/validator'



const Forms = () => {
    const [value, setValue] = useState(null);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    // get all countries list 
    const countries = Country.getAllCountries();


    // handleChange get  province

    const _handleChange = (e) => {
        let value = e.target.value
    
        const country = Country.getCountryByCode(value);
        const states = State.getStatesOfCountry(country.isoCode);
        setState(states)
        states.forEach((state) => {
            let cities_of_state = City.getCitiesOfState(value, state.isoCode)
            setCity(cities_of_state)
        })
    }







    return (
        <>
            <div className="form_wrapper">
                <Formik
                    initialValues={{
                        title: '',
                        firstname: '',
                        familyname: '',
                        email: '',
                        reEmail: '',
                        country: '',
                        city: '',
                        age: '',

                    }}
                    validationSchema={FormSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    <Form >
                        <div className='row'>
                            <div className="col-md-6">
                                <div className='input_wrapper'>
                                    <Field as="select" className='select_option' name="title" >
                                        {Title.map((title, index) => (
                                            <option value={title} key={index}>{title}</option>

                                        ))}
                                    </Field>
                                    <Field type="text" name="firstname" className='input' placeholder={`Name `} />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <Field type="text" name="familyname" placeholder='1st Family Name *' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <Field type="email" name="email" placeholder='Email Address *' />
                            </div>
                            <div className="col-md-6">
                                <Field type="text" name="second_familyname" placeholder='2nd Family Name (optional)' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <Field type="email" name="reEmail" placeholder='Re Enter Email Address *' />
                            </div>
                            <div className="col-md-6">
                                <Field type="text" name="third_familyname" placeholder='3rd Family Name (optional)' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <Field type="text" name="industry" placeholder='Currently Industry ?' />
                            </div>
                            <div className="col-md-6">
                                <div className="info_city">
                                    <Field as="select" name="country" onChange={_handleChange} >
                                        <option defaultChecked>Country *</option>
                                        {
                                            countries.map((country, index) => (
                                                <option value={country?.isoCode} onClick={() => setState(country.name)}>{country?.name}</option>

                                            ))
                                        }

                                    </Field>

                                    <Field type="text" name="postal" className='select_data' placeholder='Post Code' />

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                {/* <div className='input_wrapper'> */}
                                <PhoneInput
                                    // disabled={disabled}
                                    containerClass={"input_wrapper"}
                                    countryCode={"us"}
                                    name="mobile"
                                    // onChange={handleOnChange}
                                    placeholder={"Mobile"}
                                />

                                {/* </div> */}
                            </div>
                            <div className="col-md-6">
                                <div className="info_city">
                                    <Field as="select" >
                                        <option defaultChecked>City</option>
                                        {city.map((data, index) => (
                                            <option value={data.isoCode}>{data.name}</option>

                                        ))}
                                    </Field>
                                    <Field as="select" className='select_data'>
                                        <option defaultChecked>Province (optional)</option>
                                        {state.map((item, index) => (
                                            <option value={item.isoCode}>{item.name}</option>

                                        ))}
                                    </Field>

                                </div>

                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-md-6">
                                <input type="text" placeholder='Position or field interest *' />
                            </div>
                            <div className="col-md-6">
                                <div className="info_city">
                                    <input type="text" placeholder='Age *' />

                                    <div className="date_picker select_data">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <Textinput {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="info_button">
                                    <label>Manadatory</label>
                                    <button type='submit'>Submit</button>
                                </div>
                            </div>

                        </div>
                    </Form>
                </Formik>

            </div >

        </>
    )
}

export default Forms