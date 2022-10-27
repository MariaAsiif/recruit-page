import React, { useState, useEffect } from 'react';
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
        operationName: yup.string().required(),
        operationResult: yup
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
        timesOfMedicine: yup.string().required(),
      })
    )
  // image: yup.string().mixed().test('required', ' File  is Required', value => {
  //   return value && value.length
  // }),
});



const SurgicalHistory = ({ handleNext, handleBack, updateState, data }) => {

  const [dates, setDates] = useState([]);
  const [checkBox, setCheckbox] = useState([]);
  const [imagefile, setImageFile] = useState('');
  // const [medicationDate, setMedicationDate] = useState('');

  const {
    register,
    watch,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange', resolver: yupResolver(schema),
    defaultValues: {
      operationType: [{ operationName: "", operationResult: "", operationDate: "" }],
      medicationsSuppliments: [{ medicine: "", dosage: "", takingNow: true, isSurgeyDone: true, timesOfMedicine: "", prescriptionFile: "" }]

    }
  });

  useEffect(() => {
    if (data?.operationType) {
      reset(data)
    }
  }, [reset, data])

  const onSubmit = async (values) => {

    let surgical = []
    for (let index = 0; index < values.operationType.length; index++) {
      const element = values.operationType[index];
      const d = dates[index]
      let updated = `${d.year}-${d.month}-${d.day}`;
      element.operationDate = updated
      surgical.push(element)
    }

    for (let index = 0; index < values.medicationsSuppliments.length; index++) {
      const element = values.medicationsSuppliments[index];
      element.prescriptionFile = imagefile
      // const talk = checkBox[index].takingNow
      // const surg = checkBox[index].takingNow
      // element.takingNow = talk
      // element.isSurgeyDone = surg
      surgical.push(element)
    }

    updateState(values)
    handleNext()


  };




  return (
    <div className='bscontainer-fluid'>

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row p-11'>


          <Surgical {...{ control, register, watch, errors, setDates }} />

          <Medications {...{ control, register, watch, errors, setImageFile, setCheckbox }} />


          <div className='flex justify-between col-lg-12'>
            <button onClick={(e) => handleBack(e)} className='p-2 text-white bg-red-500 hover:bg-green-600'>
              Back
            </button>
            <button type='submit' className='p-2 text-white bg-red-500 hover:bg-green-600'>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurgicalHistory;
