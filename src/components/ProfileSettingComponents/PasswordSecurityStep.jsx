import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector } from 'react-redux';


const schema = yup.object({
    password: yup.string()
        .required('Password is mendatory')
        .min(3, 'Password must be at 8 char long'),
    confirmPwd: yup.string()
        .required('Password is mendatory')
        .oneOf([yup.ref('password')], 'Passwords does not match'),

});
const PasswordSecurityStep = ({ handleNext, userInfo }) => {
    const user = useSelector((state) => state?.recruitAuth?.userInfo)

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const onSubmit = (data) => {


        let securityQuestions = {
            favouriteTeam: data.favouriteTeam,
            parentBirthPlace: data.parentBirthPlace
        }
        let payload = {
            password: data?.password,
            securityQuestions
        }

        userInfo((prv) => ({
            ...prv,
            ...payload
        }))
        handleNext()

    }


    useEffect(() => {
        reset(user?.securityQuestions)
    },[reset])


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-xs mb-2 font-light block'>Enter New Password</label>
                        <input type="password" {...register('password')} className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans text-xl font-medium' />
                        {

                            errors.password &&
                            <span className="text-red-500">{errors.password.message}</span>
                        }
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-xs mb-2 font-light block'>Confirm New Password</label>
                        <input type="password" {...register('confirmPwd')} className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans text-xl font-medium' />
                        {
                            errors.confirmPwd &&
                            <span className="text-red-500">{errors.confirmPwd.message}</span>
                        }
                    </div>
                    <div className='col-lg-12 mb-10'>
                        <h1 className='text-[#626973] font-sans font-semibold'>Security Question</h1>
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-xs mb-2 font-light block'>Which team play well in game?</label>
                        <input type="text"  {...register('favouriteTeam')} className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans  font-medium' />
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-xs mb-2 font-light block'>Place where your parent born?</label>
                        <input type="text" {...register('parentBirthPlace')} className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans  font-medium' />
                    </div>
                    <div className='text-right'>
                        <button className='bg-[#42946C] text-right  font-semibold font-sans rounded-md px-9 py-3 text-white '> Next Step</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PasswordSecurityStep