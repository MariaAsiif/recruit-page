import React, { useState, useEffect } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { callApi } from '../../utils/CallApi';
import { Link } from "react-router-dom"


const AssignRole = () => {

    const [roles, setallroles] = useState([])
    const [users, setallusers] = useState([])
    const [error, setError] = useState({
        userError: '',
        roleError: ''
    })
    const [user, setUser] = useState('')
    const [role, setRole] = useState('')



    const handleChange = (e) => {
        let findUser = users.find((f) => f._id === e.target.value)
        setUser(findUser._id)
    }

    const handleChangeRole = (e) => {
        let findRole = roles.find((f) => f._id === e.target.value)
        setRole(findRole._id)
    }

    console.log("err", error)


    const onSubmit = async (e) => {

        e.preventDefault()

        if (user === "") {
            setError(prev => ({
                ...prev,
                userError: "User Required"
            }))
        }

        if (role === "") {
            setError(prev => ({
                ...prev,
                roleError: "Role Required"
            }))
        }
        else {

            try {

                let payload = {
                    _id: user,
                    rolePrivileges: role

                }

                const res = await callApi("/users/updateuser", "post", payload)
                if (res.status === "Success") {
                    toast.success(res.message);
                }
                else {
                    toast.error(res.message);

                }

            } catch (error) {
                console.log(error);
            }
        }
    }



    useEffect(() => {
        (async () => {
            try {
                const roles = {

                    "sortproperty": "createdAt",
                    "sortorder": -1,
                    "offset": 0,
                    "limit": 50,
                    "query": {
                        "critarion": { "active": true },
                        "fields": "_id roleName"
                    }

                }
                const users = {

                    "sortproperty": "first_name",
                    "sortorder": 1,
                    "offset": 0,
                    "limit": 50,
                    "query": {
                        "critarion": { "active": true },

                        "addedby": "_id email first_name",
                        "lastModifiedBy": "_id email first_name"
                    }

                }
                const resRole = await callApi("/roles/getRolesList", "post", roles)
                const resUser = await callApi("/users/listAllUsers", "post", users)
                setallroles(resRole.data.roles)
                setallusers(resUser.data.users)

            } catch (error) {
                console.log(error);
            }
        })();
    }, [])





    return (
        <div className='bscontainer-fluid'>
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
            <form >
                <div className='row p-11'>

                    <div className='col-12 mb-6'>
                        <div className='mb-3'>
                            <ul className="inline-flex flex-wrap text-sm font-medium">
                                <li className="flex items-center">
                                    <Link to="/dashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/ticker" className="text-slate-500 hover:text-indigo-500" >Assign Roles </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/ticker/create-ticker" className="text-slate-500 hover:text-indigo-500" href="#0">Create Assign Roles</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Assign Roles</h2>
                        </header>
                    </div>


                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="businessName">Users </label>
                        <div className='absolute right-5 top-10'>
                            {!error.userError ? <FcCheckmark className='mr-5' /> : error.userError ? <div className=' text-red-500'><MdClose className='mr-5' /></div> : null}
                        </div>
                        <select onChange={handleChange} className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${error.userError && "border-red-400"}`}>
                            <option>Select User</option>
                            {users.map((business) => <option key={business._id} value={business._id}  >
                                <span >{business.first_name}</span>
                            </option>)}
                        </select>

                        {error.userError && (
                            <p className="text-red-500 text-sm">{error.userError}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="businessName">Roles</label>
                        <div className='absolute right-5 top-10'>
                            {!error.roleError ? <FcCheckmark className='mr-5' /> : error.roleError ? <div className=' text-red-500'><MdClose className='mr-5' /></div> : null}
                        </div>
                        <select onChange={handleChangeRole} className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${error.roleError && "border-red-400"}`}>
                            <option>Select Role</option>

                            {roles.map((business) => <option key={business._id} value={business._id}  >
                                <span >{business.roleName}</span>
                            </option>)}
                        </select>

                        {error.roleError && (
                            <p className="text-red-500 text-sm">{error.roleError}</p>
                        )}
                    </div>



                    <div className='col-lg-12'>
                        <button onClick={(e) => onSubmit(e)} className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default AssignRole