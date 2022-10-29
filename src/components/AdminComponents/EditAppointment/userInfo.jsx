
import React, { useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import { Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { callApi } from '../../../utils/CallApi';/
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { callApi } from '../../../utils/CallApi';

const UserInfo = ({ control, register, watch, errors, mode, data }) => {
  const [users, setUsers] = useState([])


  // useEffect(() => {
  //   if (data?.ssn) {
  //     reset(data)
  //   }
  // }, [reset, data])



  useEffect(() => {
    (async () => {
      try {
        let payload = {
          "sortproperty": "createdAt",
          "sortorder": -1,
          "offset": 0,
          "limit": 50,
          "query": {
            "critarion": { "active": true },
            "fields": "_id dob",
            "user": "_id email first_name"
          }

        }
        let response = await callApi('/customers/getCustomersList', 'post', payload);
        setUsers(response?.data?.customer);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);



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

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='name'>
            Customer
          </label>
          {mode === "view" ?
            <p>
              {data?.customer?.user?.first_name}
            </p>
            :
            <select {...register('customer')} className={`mt-[2px] pt-1 pb-1 h-[65%] border focus:outline-blue-500 rounded-sm w-full  ${errors.customer && 'border-red-400'
              }`}>
              <option value="">Select Customer</option>
              {
                users?.map((cus) => (
                  <option key={cus?._id} value={cus?._id}>{cus?.user?.first_name}</option>
                ))
              }
            </select>
          }
          {errors.customer && (
            <p className='text-red-500 text-sm'>{errors.customer.message}</p>
          )}
        </div>

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='name'>
            SSN
          </label>

          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.ssn && watch('ssn') ? (
                <FcCheckmark />
              ) : errors.ssn ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('ssn')}
            </p>
            :
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
          }
          <span
            hidden={watch('ssn')}
            className='absolute text-red-400 text-lg font-medium top-7 left-[95px]'
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
          {mode === "view" ?
            <p>
              {watch('homePhone')}
            </p>
            :
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

              {errors.homePhone && (
                <p className='text-red-500 text-sm'>{errors.homePhone.message}</p>
              )}
            </div>
          }
        </div>
        <div className='col-lg-4 mb-4 '>
          <label className='block text-sm font-medium  '>
            Work Phone
          </label>
          {mode === "view" ?
            <p>
              {watch('workPhone')}
            </p>
            :
            <div className='relative'>
              <Controller
                name="workPhone"
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
                    className={` w-full  ${errors.workPhone && 'error_form'}`}
                    dropdownClass={"custom-dropdown"}
                  />
                )}
              />
              {errors.workPhone && (
                <p className='text-red-500 text-sm'>{errors.workPhone.message}</p>
              )}
            </div>
          }
        </div>
        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='name'>
            Ocuupataion
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.ssn && watch('ssn') ? (
                <FcCheckmark />
              ) : errors.ssn ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }

          {mode === "view" ?
            <p>
              {watch('occupation')}
            </p>
            :
            <input
              {...register('occupation')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.occupation && 'border-red-400'
                }`}
              name='occupation'
              id='ssn'
              type='text'
              placeholder='occupation'
            />
          }
          <span
            hidden={watch('occupation')}
            className='absolute text-red-400 text-lg font-medium top-8 left-[120px]'
          >
            *
          </span>

          {errors.occupation && (
            <p className='text-red-500 text-sm'>{errors.occupation.message}</p>
          )}
        </div>
        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='name'>
            Emergency Contant Name
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.emergencyContantName && watch('emergencyContantName') ? (
                <FcCheckmark />
              ) : errors.emergencyContantName ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('emergencyContantName')}
            </p>
            :
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
          }
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
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.emergencyContactRelation && watch('emergencyContactRelation') ? (
                <FcCheckmark />
              ) : errors.emergencyContactRelation ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('emergencyContactRelation')}
            </p>
            :
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
          }
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
          {mode === "view" ?
            <p>
              {watch('emergencyContactPhone')}
            </p>
            :
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
              {errors.emergencyContactPhone && (
                <p className='text-red-500 text-sm'>{errors.emergencyContactPhone.message}</p>
              )}
            </div>
          }
        </div>
        <div className='col-lg-4 mb-4 '>
          <label className='block text-sm font-medium  '>
            Family Doctor Name
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.familyDoctorName && watch('familyDoctorName') ? (
                <FcCheckmark />
              ) : errors.familyDoctorName ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          <div className='relative '>
            {mode === "view" ?
              <p>
                {watch('familyDoctorName')}
              </p>
              :
              <input
                {...register('familyDoctorName')}
                autoComplete='off'
                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.familyDoctorName && 'border-red-400'
                  }`}
                name='familyDoctorName'
                id='familyDoctorName'
                type='text'
                placeholder='familyDoctorName'
              />
            }

            {errors.familyDoctorName && (
              <p className='text-red-500 text-sm'>{errors.familyDoctorName.message}</p>
            )}
          </div>
        </div>
        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium  ' htmlFor='name'>
            Referring Doctor Name
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.referringDoctorName && watch('referringDoctorName') ? (
                <FcCheckmark />
              ) : errors.referringDoctorName ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('referringDoctorName')}
            </p>
            :
            <input
              {...register('referringDoctorName')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.referringDoctorName && 'border-red-400'
                }`}
              name='referringDoctorName'
              id='referringDoctorName'
              type='text'
              placeholder='referringDoctorName'
            />
          }

          {errors.referringDoctorName && (
            <p className='text-red-500 text-sm'>{errors.referringDoctorName.message}</p>
          )}
        </div>
        <div className='col-lg-4 mb-4 '>
          <label className='block text-sm font-medium  '>
            Doctor Phone
          </label>

          {mode === "view" ?
            <p>
              {watch('doctorPhone')}
            </p>
            :
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

              {errors.doctorPhone && (
                <p className='text-red-500 text-sm'>{errors.doctorPhone.message}</p>
              )}
            </div>
          }
        </div>
        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='name'>
            Doctor Fax
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.doctorFax && watch('doctorFax') ? (
                <FcCheckmark />
              ) : errors.doctorFax ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('doctorFax')}
            </p>
            :
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
          }
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
          {mode !== "view" &&
            <div className='absolute right-5 top-8'>
              {!errors.otherReferralSource && watch('otherReferralSource') ? (
                <FcCheckmark />
              ) : errors.otherReferralSource ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('otherReferralSource')}
            </p>
            :
            <input
              {...register('otherReferralSource')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.otherReferralSource && 'border-red-400'
                }`}
              name='otherReferralSource'
              id='otherReferralSource'
              type='text'
              placeholder=' Other Referral Source'
            />
          }

          {errors.otherReferralSource && (
            <p className='text-red-500 text-sm'>{errors.otherReferralSource.message}</p>
          )}
        </div>
        <div className='col-lg-12 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='quote'>
            Doctor Address
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-10'>
              {!errors.homeAddress && watch('doctorAddress') ? (
                <FcCheckmark />
              ) : errors.doctorAddress ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('doctorAddress')}
            </p>
            :
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
          }
          {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

          {errors.doctorAddress && (
            <p className='text-red-500 text-sm'>{errors.doctorAddress.message}</p>
          )}
        </div>
        <div className='col-lg-12 mb-4 relative'>
          <label className='block text-sm font-medium ' htmlFor='quote'>
            Home Address
          </label>
          {mode !== "view" &&

            <div className='absolute right-5 top-10'>
              {!errors.homeAddress && watch('homeAddress') ? (
                <FcCheckmark />
              ) : errors.homeAddress ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('homeAddress')}
            </p>
            :
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
          }
          {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

          {errors.homeAddress && (
            <p className='text-red-500 text-sm'>{errors.homeAddress.message}</p>
          )}
        </div>
        {/* <div className='col-lg-12'>
            <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Next
            </button>

          </div> */}
      </div>
      {/* </form> */}
    </div>
  )
}

export default UserInfo