import React, { useState } from 'react'
import loginImage from '../images/login/Login.png'
import logoImage from '../images/logo.png'
import { IoMail } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Login = () => {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [show, setShow] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const handleChange = (e) => {
        const { value, name } = e.target

        setLogin((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className='container h-screen'>
            <div className='row h-full'>
                <div className='col-lg-4 col-12 left_img '>
                    <img src={loginImage} className="lg:h-full" alt="login_image" />
                </div>
                <div className='col-lg-8 col-12'>
                    <div className='lg:max-w-[400px] m-auto lg:mt-[5rem] page_wrapper'>
                        <img src={logoImage} className="lg:ml-[80px] w-[40%]" alt="logo" />
                        <div className='mt-[5rem]'>
                            <div className='border-b mb-4  cursor-pointer flex items-center'>
                                <IoMail className='text-[18px] ml-2 mr-2 text-[#4DA676]' />
                                <input type={show ? "password" : "email"} onChange={handleChange} name="email" value={login.email} placeholder='Join@gmail.com' className='focus:outline-none text-black w-full rounded-md  h-[45px] ' />
                                {
                                    show ?
                                    <AiFillEyeInvisible onClick={() => setShow(false)} className={`${ login.email ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />
                                    :
                                    <AiFillEye onClick={() => setShow(true)} className={`${ login.email ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />

                                }
                            </div>
                            <div className={` border-b mb-4  cursor-pointer  flex items-center'`}>
                                <FaLock className={`${login.password ? 'text-[18px] mt-3 ml-2 mr-2 text-[#4DA676]' : 'text-[18px] ml-2 mr-2 mt-3 text-[#4DA676]'}`} />
                                <input type={showPass ? "text" : "password"} onChange={handleChange} name="password" value={login.password} placeholder='Password' className='focus:outline-none text-black w-full rounded-md  h-[45px] ' />
                                {
                                    showPass  ?
                                    <AiFillEyeInvisible onClick={() => setShowPass(false)} className={`${ login.email ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />
                                    :
                                    <AiFillEye onClick={() => setShowPass(true)} className={`${ login.email ? 'text-[#42946C]' : 'text-black'} text-[23px] mr-2 mt-3`} />

                                }
                            </div>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <input type="checkbox" className='text-gray-400 remminder' />
                            <span className='text-[12px] ml-2 text-gray-400'>Keep me logged in</span>
                        </div>
                        <div className='text-center mt-6' >
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

                </div>
            </div>
        </div>
    )
}

export default Login