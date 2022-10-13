import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm, Controller } from "react-hook-form";
import { Country, State, City } from 'country-state-city';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import { ImCross } from "react-icons/im";
import { InputFields, ModelStyled } from './StyleService'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    business: yup.string().required(),
    content: yup.string().required(),
    gender: yup.string().required(),
    longitude: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
    // country : yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    latitude: yup.string().required(),
    zipcode: yup.string().required(),
    website: yup.string().required(),
    mobile: yup.string().required(),
    address: yup.string().required(),
});





const ServicePopup = (props) => {
    const { register, watch, handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
    const [all_Countries, setall_Countries] = useState([])
    const [all_States, setall_States] = useState([])
    const [all_Cities, setall_Cities] = useState([])
    const [countryCode, setCountryCode] = useState("")
    const [recruitModel, setrecruitModel] = useState({
        city: "",
        state: "",
        country: "",
    })
    const [error, seterror] = useState({
        city: "",
        state: "",

    })




    const handleChangeCountry = (e) => {
        let { value } = e.target
        const updatedStates = State.getStatesOfCountry(value)
        setall_States(updatedStates)
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            country: value,

        }))



    }


    const handleState = (e) => {
        let { value } = e.target
        const updatedCities = City.getCitiesOfState(recruitModel.country, value)
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            state: value,

        }))
        setall_Cities(updatedCities)

    }


    const handleChange = (e) => {
        let { name, value } = e.target
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            [name]: value
        }))
    }


    const onSubmit = (data) => {
        console.log("data", data)
        if (recruitModel.state !== "") {
            seterror((prevmodel) => ({
                ...prevmodel,
                state: "State is required",

            }))
        }
    }
    console.log("error", recruitModel)
    useEffect(() => {
        try {
            (async () => {
                const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
                const currentCountryCode = response.data.location.country.code
                let id = response.data.location.country.tld
                let removeDot = id.replace('.', "")
                setCountryCode(removeDot)
                const get_countris = Country.getAllCountries()
                const updatedStates = State.getStatesOfCountry(currentCountryCode)
                setall_States(updatedStates)
                setrecruitModel((prevmodel) => ({
                    ...prevmodel,
                    country: currentCountryCode,

                }))
                setall_Countries(get_countris)


            })();
        } catch (error) {
            console.log(error);
        }

    }, [])
    return (
        <ModelStyled>
            <Modal show={props.show} onHide={props.onClose} size="xl"  >
                <Modal.Header  >
                    <Modal.Title>Add Service</Modal.Title>
                    <button onClick={props.onClose} className='btn float-left'><ImCross /></button>
                </Modal.Header>
                <Modal.Body style={{ height: "100%" }}>
                    <InputFields>
                        <Container>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Row className="input_fields">
                                    <Col md={4}>
                                        <label>Business</label>
                                        <input {...register('business')} placeholder='business' className={` form-control  form-control-lg   ${errors.business ? `border_new` : "border_remain"} `} />
                                        {errors.business && (<p className="error_show">This field is required</p>)}
                                    </Col>
                                    <Col md={4}>
                                        <label>Content</label>
                                        <input {...register('content')} placeholder='Content' className={` form-control  form-control-lg   ${errors.content ? "border_new" : "border_remain"} `} />
                                        {errors.content && (<p className="error_show">This field is required</p>)}
                                    </Col>
                                    <Col md={4}>
                                        <label>Gender</label>
                                        <select  {...register('gender')} className={` form-control  form-control-lg   ${errors.gender ? "border_new" : "border_remain"} `}>
                                            <option value="">Select Gender </option>
                                            <option value="Male" >Male</option>
                                            <option value="Female" >Female</option>
                                        </select>
                                        {errors.gender && (<p className="error_show">This field is required</p>)}
                                    </Col>
                                    <Col md={4}>
                                        <label>Email</label>
                                        <input type="email" {...register('email')} placeholder='business' className={` form-control  form-control-lg   ${errors.email ? "border_new" : "border_remain"} `} />
                                        {errors.email && (<p className="error_show">This field is required</p>)}
                                    </Col>
                                    <Col md={4}>
                                        <label>Longitude</label>
                                        <input type="text"  {...register('longitude')} placeholder='Longitude' className={` form-control  form-control-lg   ${errors.longitude ? "border_new" : "border_remain"} `} />
                                        {errors.longitude && (<p className="error_show">This field is required</p>)}
                                    </Col>
                                    <Col md={4}>
                                        <label>Latitude</label>
                                        <input type="text"  {...register('latitude')} placeholder='Latitude' className={` form-control  form-control-lg   ${errors.latitude ? "border_new" : "border_remain"} `} />
                                        {errors.latitude && (<p className="error_show">This field is required</p>)}
                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="country">Country</label>
                                        <select value={recruitModel.country} onChange={handleChangeCountry} name="country" id="country" className={`form-control  form-control-lg ${errors.country && 'border-red-500'}`} >
                                            <option value="">Select Country </option>
                                            {all_Countries.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                                        </select>

                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="state">State</label>
                                        <select value={recruitModel.state} onChange={handleState} name="state" id="state" className={`form-control  form-control-lg  `}   >
                                            <option value="">Select State </option>
                                            {all_States.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                                        </select>
                                        {error.state && (<p className="error_show">This field is required</p>)}

                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="city">City</label>
                                        <select value={recruitModel.city} onChange={handleChange} name="city" id="city" className={`form-control  form-control-lg  `}      >
                                            <option value="">Select city </option>
                                            {all_Cities.map((contry) => <option >{contry.name}</option>)}
                                        </select>
                                        {error.city && (<p className="error_show">This field is required</p>)}
                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="phone">Phone</label>
                                        <Controller
                                            name="mobile"
                                            control={control}
                                            rules={{ required: true }}
                                            style={{ height: '40px' }}
                                            render={({ field: { onChange, value } }) => (
                                                <PhoneInput
                                                    value={value}
                                                    enableSearch
                                                    disableSearchIcon
                                                    country={countryCode}
                                                    onChange={onChange}
                                                    placeholder="000 000 000"
                                                    // countryCodeEditable={false}
                                                    className={` w-full  ${errors.mobile && 'error_form'}`}
                                                    dropdownClass={"custom-dropdown"}
                                                />
                                            )}
                                        />
                                        {errors.mobile && (
                                            <p className="error_show">{errors.mobile.message}</p>
                                        )}
                                    </Col>

                                    <Col md={4}>
                                        <label>Zipcode</label>
                                        <input type="number"  {...register('zipcode')} placeholder='Zipcode' className={` form-control  form-control-lg   ${errors.zipcode ? "border_new" : "border_remain"} `} />
                                        {errors.zipcode && (<p className="error_show">This field is required</p>)}
                                    </Col>
                                    <Col md={4}>
                                        <label htmlFor="instagram">Instagram </label>
                                        <input {...register('instagram')} autoComplete="off" className={` form-control  form-control-lg`} placeholder="instagram" type="text" />
                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="instagram">LinkedIn </label>
                                        <input {...register('linkedin')} autoComplete="off" className={` form-control  form-control-lg`} placeholder="LinkedIn" type="text" />
                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="instagram">Twitter </label>
                                        <input {...register('twitter')} autoComplete="off" className={` form-control  form-control-lg`} placeholder="Twitter" type="text" />
                                    </Col>

                                    <Col md={4}>
                                        <label htmlFor="instagram">Facebook </label>
                                        <input {...register('facebook')} autoComplete="off" className={` form-control  form-control-lg`} placeholder="Facebook" type="text" />
                                    </Col>

                                    <Col md={12} className="mb-3">
                                        <label htmlFor="instagram">Permanent Address </label>
                                        <input {...register('address')} autoComplete="off" className={` form-control  form-control-lg`} placeholder="address" type="text" />
                                    </Col>
                                    <Col md={4}>
                                        <button className='btn_submit'>Submit</button>
                                    </Col>







                                </Row>
                            </form>
                        </Container>
                    </InputFields>
                </Modal.Body>

            </Modal >
        </ModelStyled >
    )
}

export default ServicePopup