import React, { useState, useEffect } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { IoMdMail } from 'react-icons/io'
import axios from 'axios'
import OtpInput from "react-otp-input";
import { BsCheckCircleFill } from 'react-icons/bs'
const CompanyForm = ({ handleNext }) => {
  const [countryCode, setcountryCode] = useState("se")
  const [show, setShow] = useState(true)
  const [formModel, setformModel] = useState({
    mobile: '',
    email: '',
    country: "AF",

  })

  const [email, setEmail] = useState("");

  const handleChangeEmailCode = (code) => setEmail(code);


  const [phone, setPhone] = useState("");

  const handleChangePhoneCode = (code) => setPhone(code);

  const handleChange = (e) => {
    const { value, name } = e.target
    setformModel((prevmodel) => ({
      ...prevmodel,
      [name]: value
    }))
  }


  const handleChangeMobile = (number) => {
    setformModel((prevmodel) => ({
      ...prevmodel,
      mobile: number
    }))
  }


  useEffect(() => {
    (async () => {
      const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
      const currentCountryCode = response.data.location.country.code

      setcountryCode(currentCountryCode.toLowerCase())
      setformModel((prevmodel) => ({
        ...prevmodel,
        country: currentCountryCode,

      }))

    })();
  }, [])



  return (
    <div>
      <div className="text-center">
        <h2 className='text-[20px] font-medium'>Verify Your Account </h2>
        <span className='text-[12px] text-gray-400'>Click on verify and get OTP code to verify your account</span>

        <div className='pt-4'>
          <label className='text-[10px] text-gray-400'>Enter Your Mobile Number that's end with(055) </label>
          <div className='px-3 max-w-[300px] m-auto'>
            {show &&
              <PhoneInput
                country={countryCode}
                containerStyle={{ marginBottom: "20px", marginTop: '10px' }}
                inputStyle={{ width: "100%", height: "40px", color: "#CCCCCC" }}
                buttonStyle={{ borderBottom: "1px solid #6D6E71", borderRadius: "8px 0 0 8px" }}
                countryCodeEditable={false}
                value={formModel.mobile}
                onChange={handleChangeMobile}
              />
            }
            {!show &&
              <div className='flex justify-center items-center'>
                <OtpInput
                  value={phone}
                  onChange={handleChangePhoneCode}
                  placeholder="----"
                  numInputs={4}
                  separator={<span style={{ width: "8px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "1px solid gray",
                    textAlign: 'center',
                    borderRadius: "8px",
                    width: "40px",
                    height: "40px",
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "400",
                    caretColor: "blue"
                  }}
                  focusStyle={{
                    border: "1px solid #CFD3DB",
                    outline: "none"
                  }}
                />
                {
                  phone.length === 4 && <BsCheckCircleFill className='text-[30px] text-[#65A33A] ml-3' />}
              </div>
            }
          </div>
          <div className='text-center flex justify-center flex-col max-w-[300px] m-auto pt-4'>
            <label className='text-[8px] text-gray-400'>Enter Your email that’s started with (a————butt@gmail.com) </label>
            {show &&

              <div className='border-b flex pt-5 '>
                <IoMdMail className='text-[20px]' />
                <input type="email" name="email" value={formModel.email} onChange={() => handleChange} className='focus:outline-none w-full' />
              </div>
            }
            {!show &&

              <div className='flex justify-center items-center'>
                <OtpInput
                  value={email}
                  onChange={handleChangeEmailCode}
                  placeholder="----"
                  numInputs={4}
                  separator={<span style={{ width: "8px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "1px solid gray",
                    textAlign: 'center',
                    borderRadius: "8px",
                    width: "40px",
                    height: "40px",
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "400",
                    caretColor: "blue"
                  }}
                  focusStyle={{
                    border: "1px solid #CFD3DB",
                    outline: "none"
                  }}
                />
                {email.length === 4 && <BsCheckCircleFill className='text-[30px] text-[#65A33A] ml-3' />}

              </div>
            }

          </div>
        </div>
      </div>
      {
        formModel.mobile && formModel.email.length > 0 || show &&
        <div className='flex justify-end mt-[25px]'>
          <button onClick={() => setShow(false)} className='  bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-[20%]'>{"Next Step"}</button>
        </div>

      }
      {
        !show &&

        <div className='flex justify-end mt-[25px]'>
          <button onClick={() => handleNext()} className='  bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-[20%]'>{"Next Step"}</button>
        </div>
      }
    </div>
  )
}

export default CompanyForm