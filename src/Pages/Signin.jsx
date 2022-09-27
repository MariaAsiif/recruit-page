import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import AuthImage from '../images/signin.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import logo from '../images/hporx_logo.png';
import { useDispatch } from 'react-redux';
import { signin } from '../Redux/UserAuthSlice/UserAuthSlice';
import { callPublicApi } from '../utils/CallApi';
import Loader from '../components/Loader/loader';

function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '../admindashboard';
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [authValue, setAuthValue] = useState({
    email: 'superadmin@getnada.com',
    password: '12345678',
  });

  const [errors, seterrors] = useState({
    emailError: null,
    passwordError: null,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    // if (e.target.name === "email") {
    //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   const validate = value.trim().toLowerCase();
    //   const isValidEmail = re.test(validate);
    //   if (isValidEmail === false) {
    //     seterrors({
    //       emailError: (<div className='text-red-600'>Email is invalid</div>),
    //     })
    //     setAuthValue((prevname) => ({
    //       ...prevname,
    //       email: value,
    //     }))

    //   }

    // }
    // else {
    setAuthValue((prevname) => ({
      ...prevname,
      [e.target.name]: value,
    }));

    seterrors({
      emailError: null,
    });
    // }
  };

  const OnSubmitData = async (e) => {
    e.preventDefault();
    if (authValue.password === '') {
      seterrors({
        passwordError: <div className='text-red-600'>Password is required</div>,
      });
    } else {
      try {
        setLoading(true);
        const response = await callPublicApi(
          '/users/signin',
          'post',
          authValue
        );
        if (response?.data?.status === 'Fail') {
        } else {
          setLoading(false);

          dispatch(signin({ token: response.token, userdata: response.data }));
          navigate(from, { replace: true });
        }
      } catch (err) {
        console.log('err', err);
        // dispatch(signin({ token: response.token} ))
        // navigate("../dashboard");
      }
    }
  };

  let { email, password } = authValue;
  return (
    <main className='bg-white'>
      {loading && <Loader />}

      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <Link className='block' to='/'>
                  <img src={logo} alt='Logo' className=' w-36' />
                </Link>
              </div>
            </div>

            <div className='w-full   md:w-3/4  mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Welcome back!{' '}
              </h1>
              {/* Form */}
              <form onSubmit={OnSubmitData}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'
                    >
                      Email Address
                    </label>
                    <input
                      id='email'
                      name='email'
                      value={email}
                      onChange={handleChange}
                      className='border p-2 focus:outline-blue-500 rounded-sm w-full'
                      type='email'
                    />
                  </div>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    <input
                      id='password'
                      name='password'
                      value={password}
                      onChange={handleChange}
                      className='border p-2 focus:outline-blue-500 rounded-sm w-full'
                      type='password'
                      autoComplete='on'
                    />
                  </div>
                </div>
                <div className='flex items-center justify-between mt-6'>
                  <div className='mr-1'>
                    <Link
                      className='text-sm underline hover:no-underline'
                      to='/reset-password'
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className='mr-1'>
                    <Link
                      to='/signup'
                      className=' p-2 rounded-sm bg-red-500 hover:bg-green-600 text-white m1-3 whitespace-nowrap'
                    >
                      Sign Up
                    </Link>

                    <button
                      type='submit'
                      className=' p-2 rounded-sm bg-red-500 hover:bg-green-600 text-white ml-3 whitespace-nowrap'
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
              {/* Footer */}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'
        >
          <img
            className='object-cover object-center w-full h-full'
            src={AuthImage}
            width='760'
            height='1024'
            alt='Authentication'
          />
          <img
            className='absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block'
            src={AuthDecoration}
            width='218'
            height='224'
            alt='Authentication decoration'
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
