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
                            <div className='border mb-4 border-[#E84025] cursor-pointer hover:border-[#93C234] rounded-md flex items-center'>
                                <IoMail className='text-[18px] ml-2 mr-2 text-[#E84025]' />
                                <input type="email" onChange={handleChange} name="email" value={login.email} placeholder='Join@gmail.com' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                            </div>
                            <div className={`${login.password && 'hover:border-[#93C234]'} border mb-4 border-[#E84025] cursor-pointer rounded-md flex items-center'`}>
                                <FaLock className={`${login.password ? 'text-[18px] mt-3 ml-2 mr-2 text-[#93C234]' : 'text-[18px] ml-2 mr-2 mt-3 text-[#E84025]'}`} />
                                <input type={show ? "text" : "password"} onChange={handleChange} name="password" value={login.password} placeholder='Password' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                {login.password ?
                                    show ?
                                        <AiFillEye onClick={() => setShow(false)} className={'text-[27px] mr-2 mt-2 text-[#93C234]'} />
                                        :
                                        <AiFillEyeInvisible onClick={() => setShow(true)} className={'text-[27px] mr-2 mt-2 text-[#93C234]'} />
                                    : null

                                }
                            </div>
                        </div>
                        <div className='mt-4 flex items-center'>
                            <input type="checkbox" className='text-gray-400' />
                            <span className='text-[12px] ml-2 text-gray-400'>Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className='text-center mt-4' >
                            <Link to="/dashboard" className='border px-9 py-3 rounded-md text-white hover:bg-[#93C234] bg-[#E84025] '>Login</Link>
                        </div>
                        <div className='mt-4'>
                            <span className='text-[12px] text-gray-400'>
                                Don't have an account to login,
                                <Link to="/signup">
                                    <span className='hover:underline text-[#E84025] text-[12px] pl-1'>Click here to create the account!</span>
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