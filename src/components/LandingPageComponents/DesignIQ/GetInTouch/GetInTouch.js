import React, { useState } from "react";
import InputField from "../../Homepage/SubscribeNewsletter/InputField";
import {
  GetInTouchImg,
  GetInTouchInner,
  GetInTouchMain,
} from "./StyledGetInTouch";
import { Col, Container, Spinner, Row } from "react-bootstrap";
import Select from "../../Homepage/Select/Select";
import { SubscribeButton } from "../../Homepage/SubscribeNewsletter/StyledNewsLetter";
import getIn from "../../../../assets/landingImages/getInTouch.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import GenerecService from "../../../../utils/GenericService";
import { API_URL } from "../../../../utils/GenericService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validate = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 character or less")
    .required("Required"),
  email: Yup.string()
    .email("You have entered invalid email")
    .required("Required"),
  option: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(11, "to short")
    .max(11, "to long")
    .required("Required"),
  subject: Yup.string()
    .max(15, "Must be 15 character or less")
    .required("Required"),
});

const GetInTouch = () => {
  const genericService = new GenerecService();

  const [formLoading, setFormLading] = useState(false);
 


  return (
    <Container>
      <ToastContainer style={{fontSize:'1.4rem'}}  />
      <GetInTouchMain>
        <h3>Have any Query Get In Touch!</h3>
        <GetInTouchInner>
          <Row className="justify-content-between align-items-center">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                subject: "",
                option: "",
                message: "",
              }}
              validationSchema={validate}
              onSubmit={(values , {resetForm}) => {
                setFormLading(true);
                genericService
                  .post(`${API_URL}getInTouchQuery`, values)
                  .then((msg) => {
                    resetForm()
                    toast.success(msg.message );
                    // <div>
                    //     <button onClick={notify}>Notify!</button>
                    //    
                    //   </div>
                    setFormLading(false);
                    // alert('Successful')
                  })
                  .catch((error) => {
                    console.log(error);
                    toast.error("Something went wrong" );
                    setFormLading(false);
                    // console.log(error);
                  });
              }}
            >
              {(formik) => (
                <Col lg={7}>
                  <Form>
                    <Row className="align-items-center ">
                      <Col md={12}>
                        <Select
                          required
                          name="option"
                          title="How did you find us?"
                          placeholder='Select Option'
                          defaultOption='Select Option'
                        />
                      </Col>
                      <Row className="align-items-center ">
                        <Col md={6}>
                          <InputField
                            name="name"
                            placeholder="Enter Your Name"
                            type="text"
                            label="Name"
                          />
                        </Col>
                        <Col md={6}>
                          <InputField
                            name="email"
                            placeholder="Enter Your Email"
                            type="text"
                            label="Email"
                          />
                        </Col>
                        <Col md={6}>
                          <InputField
                            name="phone"
                            placeholder="Enter Your Phone"
                            type="phone"
                            label="Phone"
                          />
                        </Col>
                        <Col md={6}>
                          <InputField
                            name="subject"
                            placeholder="Enter Your Subject"
                            type="text"
                            label="Subject"
                          />
                        </Col>

                       <Col md={12}>
                          <InputField
                            name="message"
                            as="textarea"
                            placeholder="Message"
                            type="text"
                            label="Message"
                          />
                        </Col>
                        <div>
                          <SubscribeButton type="submit">
                              {
                                  formLoading ? (
                                    <Spinner
                                    as="span"
                                    animation="grow"
                                    role="status"
                                    aria-hidden="true"
                                  />
                                  ) : 'Send'
                              }
                           
                          </SubscribeButton>
                        </div>
                      </Row>
                    </Row>
                  </Form>
                </Col>
              )}
            </Formik>
            <Col lg={5}>
              <GetInTouchImg src={getIn} alt={getIn} />
            </Col>
          </Row>
        </GetInTouchInner>
      </GetInTouchMain>
      
    </Container>
  );
};

export default GetInTouch;
