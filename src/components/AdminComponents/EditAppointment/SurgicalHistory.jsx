import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Surgical from '../AppoinmtentSubmodule/Surgical';
import Medications from '../AppoinmtentSubmodule/Medications';
import { ToastContainer } from 'react-toastify';

const schema = yup.object({
  // name: yup.string().required('Operation Name is Required'),
  // past: yup.string().required('Past Operations is Required'),
  // medicine: yup.string().required(' Medicine  is Required'),
  // dosage: yup.string().required(' Dosage  is Required'),
  // time: yup.string().required(' Medicine Time  is Required'),
  operationType: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required(),
        past: yup
          .string()

          .required(),
      })
    )
    .required(),
    medicationsSuppliments: yup
    .array()
    .of(
      yup.object({
        medicine: yup.string().required(),
        dosage: yup.string().required(),
        time: yup.string().required(),
      })
    )
  // image: yup.string().mixed().test('required', ' File  is Required', value => {
  //   return value && value.length
  // }),
});



const SurgicalHistory = ({ control, register, watch, errors , mode , data }) => {

  const [dates, setDates] = useState([]);
  const [imagefile, setImageFile] = useState('');

  // const {
  //   register,
  //   watch,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: 'onChange', resolver: yupResolver(schema),
  //   defaultValues: {
  //     operationType: [{ operationName: "", operationResult: "", operationDate: "" }],
  //     medicationsSuppliments: [{ medicine: "", dosage: "", takingNow: true, timesOfMedicine: "", prescriptionFile: "" }]

  //   }
  // });



  const onSubmit = async (values) => {

    let surgical = []
    for (let index = 0; index < values.test.length; index++) {
      const element = values.test[index];
      const d = dates[index]
      let updated = `${d.year}-${d.month}-${d.day}`;
      element.operationDate = updated
      surgical.push(element)
    }
    console.log("value", values)
    // updateState(values)
    // handleNext()


  };




  return (
    <div>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <div className='row p-11'>


          <Surgical {...{ control, register, watch, errors, setDates , mode ,  }} />

          <Medications {...{ control, register, watch, errors, setImageFile , mode , data   }} />


         
        </div>
      {/* </form> */}
    </div>
  );
};

export default SurgicalHistory;
