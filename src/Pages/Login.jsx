import React, { useState } from 'react'
import loginImage from '../images/login/Login.png'
import logoImage from '../images/logo.png'
import { IoMail } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import { FcCheckmark } from 'react-icons/fc'
// import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { callPublicApi } from '../utils/CallApi'
import { useDispatch } from 'react-redux'
import { signin } from '../Redux/RecruitAuthSlice/RecruitAuthSlice'
import Loader from '../components/Loader/loader'
const schema = yup.object({

    email: yup.string().email("Invalid email format").required(),
    password: yup.string().required(),

});
const Login = () => {
    const [loader, setLoader] = useState(false)
    const [show, setShow] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    let navigate = useNavigate()
    const dispatch = useDispatch();

    // const handleChange = (e) => {
    //     const { value, name } = e.target

    //     setLogin((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    const onSubmit = async (values) => {
        try {
            setLoader(true)
            const response = await callPublicApi(
                '/users/signin',
                'post',
                values
            );
            if (response.status === "Success") {
                if (response.data?.role === "customer") {
                    setLoader(false)
                    dispatch(signin({ token: response.token, userdata: response.data }));
                    toast.success(response?.data?.message)
                    navigate('/dashboard')
                }
                else if (response.data?.role === "vendor") {
                    setLoader(false)

                    dispatch(signin({ token: response.token, userdata: response.data }));
                    toast.success(response?.data?.message)

                    navigate('/e-dashboard')

                }
                else if (response.data?.role === "companytasker" || "individualtasker") {
                    setLoader(false)
                    dispatch(signin({ token: response.token, userdata: response.data }));
                    toast.success(response?.data?.message)

                    navigate('/')

                }
                else if (response.data?.role === "admin") {
                    setLoader(false)
                    dispatch(signin({ token: response.token, userdata: response.data }));
                    toast.success(response?.data?.message)

                    navigate('/admindashboard')

                }
                else {

                }

            }
            else {
                toast.error(response?.message)
            }
        } catch (error) {
            toast.error(error)

        }
    }
    return (
        <div className='container h-screen'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {loader && <Loader />}
            <div className='row h-full'>
                <div className='col-lg-4 col-12 left_img '>
                    <img src={loginImage} className="lg:h-full" alt="login_image" />
                </div>
                <div className='col-lg-8 col-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='lg:max-w-[400px] m-auto lg:mt-[5rem] page_wrapper'>
                            <img src={logoImage} className="lg:ml-[80px] w-[40%]" alt="logo" />
                            <div className='mt-[5rem]'>
                                <div className='border-b mb-4  cursor-pointer flex items-center'>
                                    <IoMail className='text-[18px] ml-2 mr-2 text-[#4DA676]' />
                                    <input type={show ? "password" : "email"} {...register('email')} name="email" placeholder='Join@gmail.com' className='focus:outline-none text-black w-full rounded-md  h-[45px] ' />
                                    {
                                        show ?
                                            <AiFillEyeInvisible onClick={() => setShow(false)} className={`${watch('email') ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />
                                            :
                                            <AiFillEye onClick={() => setShow(true)} className={`${watch('email') ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />

                                    }
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm -mt-3 ">{errors.email.message}</p>
                                )}

                                <div className={` border-b mb-4  cursor-pointer  flex items-center'`}>
                                    <FaLock className={`${'text-[18px] ml-2 mr-2 mt-3 text-[#4DA676]'}`} />
                                    <input type={showPass ? "text" : "password"} {...register('password')} name="password" placeholder='Password' className='focus:outline-none text-black w-full rounded-md  h-[45px] ' />
                                    {
                                        showPass ?
                                            <AiFillEyeInvisible onClick={() => setShowPass(false)} className={`${watch('password') ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />
                                            :
                                            <AiFillEye onClick={() => setShowPass(true)} className={`${watch('password') ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />

                                    }
                                </div>
                                {errors.password && (
                                    <p className="text-red-500  text-sm text-left -mt-3">{errors.password.message}</p>
                                )}
                            </div>
                            <div className='mt-6 flex items-center'>
                                <input type="checkbox" className='text-gray-400 remminder' />
                                <span className='text-[12px] ml-2 text-gray-400'>Keep me logged in</span>
                            </div>
                            <div className='text-center mt-6' >
                                {/* <Link to="/dashboard" className='border border-[#42946C]  rounded-md text-black w-[200px] p-2 text-[18px] font-medium  '>Login</Link> */}
                                <button className='border border-[#42946C]  rounded-md text-black w-[50%] p-2 text-[18px] font-medium  '>Login</button>
                            </div>
                            <div className='mt-6'>
                                <span className='text-[12px] text-gray-400'>
                                    Don't have an account to login,
                                    <Link to="/signup">
                                        <span className='hover:underline text-[#42946C] text-[12px] pl-1'>Click here to create the account!</span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login