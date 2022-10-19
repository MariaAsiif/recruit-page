
import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const schema = yup.object({
  ssn: yup.string().required('Field is Required'),
  homeAddress: yup.string().required('homeAddress is Required'),
  homePhone: yup.string().required('homePhone is Required'),
  workPhone: yup.string().required('workPhone is Required'),
  occupation: yup.string().required('occupation is Required'),
  emergencyContantName: yup.string().required('emergencyContantName is Required'),
  emergencyContactRelation: yup.string().required('emergencyContactRelation is Required'),
  emergencyContactPhone: yup.string().required('emergencyContactPhone is Required'),
  familyDoctorName: yup.string().required('familyDoctorName is Required'),
  referringDoctorName: yup.string().required('referringDoctorName is Required'),
  doctorAddress: yup.string().required('doctorAddress is Required'),
  doctorPhone: yup.string().required('doctorPhone is Required'),
  doctorFax: yup.string().required('doctorFax is Required'),
  otherReferralSource: yup.string().required('otherReferralSource is Required'),

});
const UserInfo = ({ handleNext }) => {


  const [companySetting, setCompanySetting] = useState(true);

  const {
    register,
    watch,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });




  const onSubmit = async (data) => {

    let value = {

    };
    const res = await callApi('/quotes/createQuote', 'post', value);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
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
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form >
        <div className='row p-11'>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium ' htmlFor='name'>
              SSN
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.ssn && watch('ssn') ? (
                <FcCheckmark />
              ) : errors.ssn ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('ssn')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.ssn && 'border-red-400'
                }`}
              name='ssn'
              id='ssn'
              type='text'
              placeholder='SS NAME'
            />
            <span
              hidden={watch('ssn')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[120px]'
            >
              *
            </span>

            {errors.ssn && (
              <p className='text-red-500 text-sm'>{errors.ssn.message}</p>
            )}
          </div>
          <div className='col-lg-4 '>
            <label className='block text-sm font-medium  '>
              Home Phone
            </label>
            <div className='relative'>
              <Controller
                name="homePhone"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    enableSearch
                    disableSearchIcon
                    country={"pk"}
                    onChange={onChange}
                    placeholder="000 000 000"
                    // countryCodeEditable={false}
                    className={` w-full  ${errors.homePhone && 'error_form'}`}
                    dropdownClass={"custom-dropdown"}
                  />
                )}
              />
            </div>
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium  '>
              Work Phone
            </label>
            <div className='relative'>
              <Controller
                name="homePhone"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    enableSearch
                    disableSearchIcon
                    country={"pk"}
                    onChange={onChange}
                    placeholder="000 000 000"
                    // countryCodeEditable={false}
                    className={` w-full  ${errors.homePhone && 'error_form'}`}
                    dropdownClass={"custom-dropdown"}
                  />
                )}
              />
            </div>
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium '>
              Occupation
            </label>
            <div className='relative -mt-2'>
              <select
                name="state"
                id="state"
                className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full   ${errors.occupation && 'border-red-500'}`}
              >
                <option>Select Occupation</option>
                <option>Plumbber</option>
                <option>Farmer</option>
                <option>Officer</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium ' htmlFor='name'>
              Emergency Contant Name
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.emergencyContantName && watch('emergencyContantName') ? (
                <FcCheckmark />
              ) : errors.emergencyContantName ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('emergencyContantName')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.emergencyContantName && 'border-red-400'
                }`}
              name='emergencyContantName'
              id='emergencyContantName'
              type='text'
              placeholder='emergencyContantName'
            />
            {/* <span
              hidden={watch('emergencyContantName')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
            >
              *
            </span> */}

            {errors.emergencyContantName && (
              <p className='text-red-500 text-sm'>{errors.emergencyContantName.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium ' htmlFor='name'>
              Emergency Contact Relation
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.emergencyContactRelation && watch('emergencyContactRelation') ? (
                <FcCheckmark />
              ) : errors.emergencyContactRelation ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('emergencyContactRelation')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.emergencyContactRelation && 'border-red-400'
                }`}
              name='emergencyContactRelation'
              id='emergencyContactRelation'
              type='text'
              placeholder='emergencyContactRelation'
            />
            {/* <span
              hidden={watch('emergencyContactRelation')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
            >
              *
            </span> */}

            {errors.emergencyContactRelation && (
              <p className='text-red-500 text-sm'>{errors.emergencyContactRelation.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium  '>
              Emergency Contact Phone
            </label>
            <div className='relative'>
              <Controller
                name="emergencyContactPhone"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    enableSearch
                    disableSearchIcon
                    country={"pk"}
                    onChange={onChange}
                    placeholder="000 000 000"
                    // countryCodeEditable={false}
                    className={` w-full  ${errors.emergencyContactPhone && 'error_form'}`}
                    dropdownClass={"custom-dropdown"}
                  />
                )}
              />
            </div>
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium  '>
              Family Doctor Name
            </label>
            <div className='relative '>
            <input
              {...register('doctorFax')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.doctorFax && 'border-red-400'
                }`}
              name='doctorFax'
              id='doctorFax'
              type='text'
              placeholder=' Other Referral Source'
            />

            {errors.doctorFax && (
              <p className='text-red-500 text-sm'>{errors.doctorFax.message}</p>
            )}
            </div>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium  ' htmlFor='name'>
              Referring Doctor Name
            </label>
            <input
              {...register('doctorFax')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.doctorFax && 'border-red-400'
                }`}
              name='doctorFax'
              id='doctorFax'
              type='text'
              placeholder=' Other Referral Source'
            />

            {errors.doctorFax && (
              <p className='text-red-500 text-sm'>{errors.doctorFax.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium  '>
              Doctor Phone
            </label>
            <div className='relative'>
              <Controller
                name="doctorPhone"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    enableSearch
                    disableSearchIcon
                    country={"pk"}
                    onChange={onChange}
                    placeholder="000 000 000"
                    // countryCodeEditable={false}
                    className={` w-full  ${errors.doctorPhone && 'error_form'}`}
                    dropdownClass={"custom-dropdown"}
                  />
                )}
              />
            </div>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium ' htmlFor='name'>
              Doctor Fax
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.doctorFax && watch('doctorFax') ? (
                <FcCheckmark />
              ) : errors.doctorFax ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('doctorFax')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.doctorFax && 'border-red-400'
                }`}
              name='doctorFax'
              id='doctorFax'
              type='text'
              placeholder='Fax'
            />
            {/* <span
              hidden={watch('doctorFax')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
            >
              *
            </span> */}

            {errors.doctorFax && (
              <p className='text-red-500 text-sm'>{errors.doctorFax.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium  '>
              Other Referral Source
            </label>
            <input
              {...register('doctorFax')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.doctorFax && 'border-red-400'
                }`}
              name='doctorFax'
              id='doctorFax'
              type='text'
              placeholder=' Other Referral Source'
            />

            {errors.doctorFax && (
              <p className='text-red-500 text-sm'>{errors.doctorFax.message}</p>
            )}
          </div>
          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium ' htmlFor='quote'>
              Doctor Address
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.homeAddress && watch('doctorAddress') ? (
                <FcCheckmark />
              ) : errors.doctorAddress ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('doctorAddress')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.doctorAddress && 'border-red-500'
                }`}
              name='doctorAddress'
              id='doctorAddress'
              placeholder='doctorAddress'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.doctorAddress && (
              <p className='text-red-500 text-sm'>{errors.doctorAddress.message}</p>
            )}
          </div>
          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium ' htmlFor='quote'>
              Home Address
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.homeAddress && watch('homeAddress') ? (
                <FcCheckmark />
              ) : errors.homeAddress ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('homeAddress')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.homeAddress && 'border-red-500'
                }`}
              name='homeAddress'
              id='homeAddress'
              placeholder='Home Address'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.homeAddress && (
              <p className='text-red-500 text-sm'>{errors.homeAddress.message}</p>
            )}
          </div>
          <div className='col-lg-12'>
            <button onClick={(e) => handleNext(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Next
            </button>

          </div>
        </div>
      </form>
    </div>
  )
}

export default UserInfo