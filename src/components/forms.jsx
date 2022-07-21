import React, { useState } from 'react'
import { Title } from '../helper/nameTitle'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Textinput from '@mui/material/TextField/TextField';
import { PhoneInput } from "react-contact-number-input";
import { Country, State, City } from 'country-state-city';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormSchema } from '../helper/validator'



const Forms = () => {
    const [value, setValue] = useState(null);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(false);

    // get all countries list 
    const countries = Country.getAllCountries();


    // handleChange get  province

    const _handleChange = (e) => {
        let value = e.target.value
        setLoading(true)
        const country = Country.getCountryByCode(value);
        const states = State.getStatesOfCountry(country.isoCode);
        setTimeout(() => {
            setLoading(false)
            setCity(states)

        }, 1000);
        states.forEach((state) => {
            setLoading(true)
            let cities_of_state = City.getCitiesOfState(value, state.isoCode)
            setTimeout(() => {
                setLoading(false)
                setCity(cities_of_state)

            }, 1000);
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
                        seondfamilyname: '',
                        thirdfamilyname: '',
                        email: '',
                        reEmail: '',
                        country: '',
                        city: '',
                        postcode:'',
                        interest:'',
                        mobile:'',
                        province:'',
                        age: '',
                        date: ''

                    }}
                    validationSchema={FormSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {(formik) => {
                        const { errors, touched, isValid, dirty, handleSubmit, handleChange } = formik;
                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className=' form_container'>
                                    <div className='row  '>
                                        <div className="col-md-6">
                                            <div
                                                className={errors.title && touched.title || errors.firstName && touched.firstName ? ' input-error input_wrapper' : "input_wrapper"}
                                                name="title"
                                            >
                                                <Field as="select"
                                                    className='select_option'
                                                    name="title"
                                                    style={{ height: '43px' }}
                                                >
                                                    {Title.map((title, index) => (
                                                        <option value={title} key={index} >{title}</option>
                                                    ))}
                                                </Field>
                                                <Field type="text"
                                                    name="firstName"
                                                    className='input'
                                                    placeholder={`Name `} />

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <Field type="text"
                                                className={errors.familyname && touched.familyname ? ' input-error input_wrapper' : "input_wrapper"}

                                                name="familyname" placeholder='1st Family Name *' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <Field type="email"
                                                className={errors.email && touched.email ? ' input-error input_wrapper' : "input_wrapper"}
                                                name="email" placeholder='Email Address *' />
                                        </div>
                                        <div className="col-md-6">
                                            <Field type="text" name="second_familyname" placeholder='2nd Family Name (optional)' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <Field type="email"
                                                className={errors.reEmail && touched.email ? ' input-error input_wrapper' : "input_wrapper"}
                                                name="reEmail" placeholder='Re Enter Email Address *' />
                                        </div>
                                        <div className="col-md-6">
                                            <Field type="text" name="third_familyname" placeholder='3rd Family Name (optional)' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <Field type="text"
                                                className={errors.industry && touched.industry ? ' input-error input_wrapper' : "input_wrapper"}
                                                name="industry"
                                                placeholder='Currently Industry ?' />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info_city">
                                                <Field as="select"
                                                    onChange={(e) => {
                                                        console.log("field value change");
                                                        handleChange(e);
                                                        _handleChange(e)
                                                    }}
                                                    className={errors.country && touched.country && 'input-error'}
                                                    name="country"
                                                >
                                                    <option defaultChecked>Country *</option>
                                                    {
                                                        countries.map((country, index) => (
                                                            <option value={country?.isoCode} key={index} >{country?.name}</option>

                                                        ))
                                                    }

                                                </Field>

                                                <Field as="select" className='select_data' name="province">
                                                    <option defaultChecked>{loading ? "loading..." : "Province (optional)"}</option>
                                                    {state.map((item, index) => (
                                                        <option value={item.isoCode}>{item.name}</option>

                                                    ))}
                                                </Field>


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
                                                <Field as="select"
                                                    className={errors.city && touched.city && 'input-error '}
                                                    name="city"
                                                >
                                                    <option defaultChecked> {loading ? "loading..." : "City"}</option>
                                                    {city.map((data, index) => (
                                                        <option value={data.isoCode}>{data.name}</option>

                                                    ))}
                                                </Field>

                                                <Field type="text" name="postal" className='select_data' placeholder='Post Code' />

                                            </div>

                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-md-6">
                                            <Field type="text" name="interest" placeholder='Position or field interest *' />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info_city">
                                                <Field type="text" name="age" placeholder='Age *' />

                                                <div className="date_picker select_data ">
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            value={value}
                                                            name="date"
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
                                                {/* <button form='my-form' type="submit">Outside Button</button> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

            </div >

        </>
    )
}

export default Forms