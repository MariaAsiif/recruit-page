import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import {
  NewsLetterImg,
  NewsLetterMainContianer,
  // SubscribeButton,
  // SubscribeHeading,
} from "./StyledNewsLetter";
import newletterImg from "../../../../assets/landingImages/subs.png";
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
      <div className=" mt-3 bg-green-800  pb-3 w-full">
        <div className="bscontainer-fluid">
          <ToastContainer style={{ fontSize: "1.4rem" }} />
          <div className="row">
            <div className="col-lg-6 pt-[3rem]">
              <div className="pl-6">
                <h2 className="text-[2rem] font-semibold text-white">Subscribe to Our Channel</h2>
                <p className="mt-8 text-[26px] text-white">You Are in  Good Company</p>
                <span className="text-[12px] text-white">This is a subscribe channel form data </span>
                <br />
                <button className="mt-5 rounded-full hover:bg-[#DC3545] hover:text-white hover:border-0  border p-4 pl-7 pr-7 text-[16px] text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-6 mb-4" >
              <div className="flex justify-center">
                <NewsLetterImg src={newletterImg} alt={newletterImg} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </NewsLetterMainContianer>
  );
};

export default SubscribeNewsletter;
