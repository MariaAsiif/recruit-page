import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import {
  NewsLetterImg,
  NewsLetterMainContianer,
  SubscribeButton,
  SubscribeHeading,
} from "./StyledNewsLetter";
import newletterImg from "../../../../assets/landingImages/subscribe2.jpg";
import Select from "../Select/Select";
import InputField from "./InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GenericService from "../../../../utils/GenericService";
import { API_URL } from "../../../../utils/config";
// subs
const SubscribeNewsletter = () => {
  const [formLoading, setFormLading] = useState(false);
  const generic = new GenericService();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("First Name is Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Last Name is Required"),
    email: Yup.string()
      .email("You have entered invalid email")
      .required("Email is Required"),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(10, "to short")
      .max(10, "to long")
      .required("Phone Numer is Required"),
    inviteFriend: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Invite Friend is Required"),
    city: Yup.string()
      .min(5, "Must be 5 character or more")
      .required("City is Required"),
    service: Yup.string().required("Service is Required"),
    position: Yup.string().required("Position is Required"),
  });
  return (
    <NewsLetterMainContianer>
      <Container>
        <ToastContainer style={{ fontSize: "1.4rem" }} />
        <SubscribeHeading>Subscribe</SubscribeHeading>
        <Row className="justify-content-between mt-3">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              inviteFriend: "",
              city: "",
              service: "",
              position: "",
            }}
            validationSchema={validate}
            onSubmit={(values , { resetForm}) => {
              setFormLading(true);
              console.log(values);
              generic
                .post(`${API_URL}subcription`, values)
                .then((msg) => {
                    resetForm()
                  toast.success(msg.message);
                  // <div>
                  //     <button onClick={notify}>Notify!</button>
                  //
                  //   </div>
                  setFormLading(false);
                  // alert('Successful')
                })
                .catch((error) => {
                  console.log(error);
                  toast.error("Something went wrong");
                  setFormLading(false);
                  // console.log(error);
                });
            }}
          >
            {(formik) => (
              <Col lg={7}>
                <Form>
                  <Row className="align-items-center ">
                    <Col md={6}>
                      <InputField
                        name="firstName"
                        placeholder="Enter First Name"
                        type="text"
                        label="First Name"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        name="lastName"
                        placeholder="Enter Last Name"
                        type="text"
                        label="Last Name"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        name="email"
                        placeholder="Enter Your Email"
                        type="email"
                        label="Email"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        name="phone"
                        placeholder="Phone Name"
                        type="phone"
                        label="Mobile Number"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        name="inviteFriend"
                        placeholder="Invite Friend"
                        type="text"
                        label="Invite Friend"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        name="city"
                        placeholder="Enter City"
                        type="text"
                        label="City"
                      />
                    </Col>

                    <Col md={12} className="mb-4 mt-2">
                      <Select
                        required
                        name="service"
                        defaultOption='Select Service'
                        title="How can we be of service to you?"
                      />
                    </Col>
                    <Col md={12} >
                      <Select
                       defaultOption='Select Option'
                        required
                        name="position"
                        title="Are you a company or individual?"
                      />
                    </Col>
                    <SubscribeButton type="submit">
                      {formLoading ? (
                        <Spinner
                          as="span"
                          animation="grow"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Subscribe"
                      )}
                    </SubscribeButton>
                  </Row>
                </Form>
              </Col>
            )}
          </Formik>
          <Col lg={5}>
            <NewsLetterImg src={newletterImg} alt={newletterImg} />
          </Col>
        </Row>
      </Container>
    </NewsLetterMainContianer>
  );
};

export default SubscribeNewsletter;
