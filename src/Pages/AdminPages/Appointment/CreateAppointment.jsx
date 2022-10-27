import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Category from '../../../components/AdminComponents/Appointments/Category'
import ConsultationType from '../../../components/AdminComponents/Appointments/ConsultationType'
import History from '../../../components/AdminComponents/Appointments/History'
import Schedule from '../../../components/AdminComponents/Appointments/Secdual'
import Secdual from '../../../components/AdminComponents/Appointments/Secdual'
import SocialHistory from '../../../components/AdminComponents/Appointments/SocialHistory'
import Submit from '../../../components/AdminComponents/Appointments/Submit'
import SurgicalHistory from '../../../components/AdminComponents/Appointments/SurgicalHistory'
import UserInfo from '../../../components/AdminComponents/Appointments/userInfo'
import { callApi } from '../../../utils/CallApi'

const CreateAppointment = () => {
  const listName = ["", "", "Category / Schedule", "Medical History", "Prvious Consulatation", "Surgical History", "Social History", "Consultation Type", "Submit"]
  const [active, setActive] = useState(0)
  const [formData, setFormData] = useState({})

  // const default = {


  const [activeIndex, setActiveIndex] = useState({
    one: false,
    two: false,
    three: false,
    for: false,
    five: false,
    six: false,
    seven: false
  })



  const handleBack = () => {
    const increse = active - 1
    setActive(increse)
  }



  const updateForm = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data
    }))
  }


  const handleNext = async (e) => {
    // e.preventDefault()
    const increse = active + 1
    console.log("inc", increse)
    if (increse === 1) {
      setActiveIndex((prev) => ({
        ...prev,
        one: true
      })
      )
    }
    if (increse === 2) {
      setActiveIndex((prev) => ({
        ...prev,
        two: true
      })
      )
    }
    if (increse === 3) {
      setActiveIndex((prev) => ({
        ...prev,
        three: true
      })
      )
    }
    if (increse === 4) {
      setActiveIndex((prev) => ({
        ...prev,
        for: true
      })
      )
    }
    if (increse === 5) {
      setActiveIndex((prev) => ({
        ...prev,
        five: true
      })
      )
    }
    if (increse === 6) {
      setActiveIndex((prev) => ({
        ...prev,
        six: true
      })
      )
    }
    if (increse === 7) {
      setActiveIndex((prev) => ({
        ...prev,
        seven: true
      })
      )
    }

    setActive(increse)
  }



  let SubmitData = async () => {
    try {
      let payload = {
        customer: formData.customer,
        customerfields: {
          "ssn": formData.ssn,
          "homeAddress": formData.homeAddress,
          "homePhone": formData.workPhone,
          "workPhone": formData.workPhone,
          "occupation": formData.occupation,
          "emergencyContantName": formData.emergencyContantName,
          "emergencyContactRelation": formData.emergencyContactRelation,
          "emergencyContactPhone": formData.emergencyContactPhone,
          "familyDoctorName": formData.familyDoctorName,
          "referringDoctorName": formData.referringDoctorName,
          "doctorAddress": formData.doctorAddress,
          "doctorPhone": formData.doctorPhone,
          "doctorFax": formData.doctorFax,
          "otherReferralSource": formData.otherReferralSource,
        },
        "reasonOfCurrentVisit": formData.reasonOfCurrentVisit,
        "requestCategory": formData.requestCategory,
        // "status": "pendding",
        "requestDate": formData.requestDate,
        "medicalHistory": [{
          "description": formData.description,
        }],
        "pastConsultants": [{
          "doctorName": formData.name,
          "specialization": formData.special,
          "lastCheckupDate": formData.lastCheckupDate,
          "profileLink": formData.link,
          "drPrescription": formData.file,
          "medicalReports": formData.report,
        }],
        "familyDiseases": formData.familyDiseases,
        "surgicalHistory": {
          "isSurgeyDone": formData.isSurgeyDone,
          "operationType": formData.operationType
        },
        "socialHistory": {
          "addictions": formData.addictions,
          "maritalStatus": formData.maritalStatus,
          "sexualOrientation": formData.sexualOrientation,
          "everHurt": formData.hurt,
          "needCarrier": formData.carrier,
          "exercise": formData.excise,
          "pregnant": formData.pregnet,
          "breastFeeding": formData.feeding,
          "lastMenstrualDate": formData.lastMenstrualDate,
          "noOfChildrens": formData.children,
          "deliveryMethod": formData.deliveryMethod,
          "deliveryInjury": formData.injury,
        },
        "allergies": formData.allergies,
        "medicationsSuppliments": formData.medicationsSuppliments,
        "symptoms": formData.symptoms,
        "consultationType": [{
          "consultationFee": formData.consultationFee,
          "communication": formData.communication
        }],

        "pictures": formData.pictures,
        "videos": formData.videos
      }
      console.log("pay", payload)
      let res = await callApi('/appointmentrequests/createAppointmentRequest', 'post', payload)
      if (res.status === "Success") {
        toast.success(res.message)
        setActive({
          one: false,
          two: false,
          three: false,
          for: false,
          five: false,
          six: false,
          seven: false
        })
      }
    } catch (error) {

    }

  }


  useEffect(() => {
    if (activeIndex.seven === true) {
      SubmitData()
    }
  }, [activeIndex])


  //  )) 

  return (
    <div className='bscontainer-fluid'>
      <div className='row h-full '>
        <div className='col-lg-12 order-2 lg:order-1 flex items-center full_form'>
          <div className={`w-full ${active === 0 && 'lg:pt-[50px]' || active === 2 && 'lg:mt-[60px]'}`}>
            <h1 className='text-center font-semibold text-[35px]'>Appointment</h1>
            <div>
              <div className='flex flex-wrap justify-center items-center lg:px-14 px-1 lg:mb-12 mb-5'>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={` rounded-full border bg-[#DB4446] text-white pt-2 text-sm  w-[40px] h-[40px] `}>01</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans'>User / info</span>
                </div>

                <div className={`${activeIndex.one === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.one === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>02</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Category / Schedule
                  </span>
                </div>
                <div className={`${activeIndex.two === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.two === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>03</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Medical History

                  </span>
                </div>
                <div className={`${activeIndex.three === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.three === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>04</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Prvious Consulatation
                  </span>
                </div>
                <div className={`${activeIndex.for === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.for === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>05</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Surgical History
                  </span>
                </div>
                <div className={`${activeIndex.five === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.five === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>06</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Social History
                  </span>
                </div>
                <div className={`${activeIndex.six === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.six === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>07</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Consultation Type
                  </span>
                </div>
                {/* <div className={`${activeIndex.seven === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.seven === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>08</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Submit
                  </span>
                </div> */}

              </div>
            </div>

            <div className='lg:ml-10 lg:mr-24'>


              {active === 0 && <UserInfo data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 1 && <Category data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 2 && <History data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 3 && <Schedule data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 4 && <SurgicalHistory data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 5 && <SocialHistory data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 6 && <ConsultationType data={formData} updateState={(value) => updateForm(value)} handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {/* {active === 7 && <Submit handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />} */}


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAppointment