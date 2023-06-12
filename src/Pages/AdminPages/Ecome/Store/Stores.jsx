import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { callApi, HOSTNAME } from '../../../../utils/CallApi';
import moment from "moment"
import { IoEyeOutline } from "react-icons/io5";
// import ViewEditInspire from "../../components/Popups/ViewEditInspire"
// import PopUp from '../../components/popup/popup';
import { toast, ToastContainer } from 'react-toastify';
import ViewEditStore from '../../../../components/Popups/ViewEditStore';
import DeletePopup from '../../../../components/deletePopups/DeletePopups';
// import DeletePopup from '../../components/deletePopups/DeletePopups';

const Stores = () => {

    const [allInspires, setallInspires] = useState([])
    const [inspirePopup, setinspirePopup] = useState(false)
    const [delPopup, setDelPopup] = useState(false)
    const [delId, setDelId] = useState('')
    const [inspireMode, setinspireMode] = useState("view")
    const [inspireRow, setinspireRow] = useState({})
    const openInspirePopup = (e, mode, data) => {
        e.stopPropagation()
        setinspirePopup(true)
        setinspireMode(mode)
        setinspireRow(data)
    }

    const deletePopToggle = (id) => {
        setDelId(id)
        setDelPopup(true)
    }

    const deleteInspire = async () => {
        let value = {
            id: delId
        }
        try {
            const res = await callApi("/stores/removeStore", "post", value)
            if (res.status === "Success") {
                toast.success(res.message);
                setDelPopup(false)
                let oldinspires = allInspires
                const updatedInspires = oldinspires.filter((inspire) => inspire._id !== res.data._id)
                setallInspires(updatedInspires)
            }
            else {
                toast.error(res.message);

            }
        } catch (error) {

        }
    }
    useEffect(() => {
        console.log("useeffect run")
        if (!inspirePopup) {
            (async () => {
                try {
                    const payload = {
                        sortproperty: "created_at",
                        sortorder: -1,
                        offset: 0,
                        limit: 50,
                        query: {
                            critarion: { active: true },
                            addedby: "_id email first_name",
                            lastModifiedBy: "_id email first_name"
                        }
                    }
                    const response = await callApi("/stores/getStoresWithFullDetails", "post", payload)

                    setallInspires(response.data.stores)
                } catch (error) {
                    console.log(error);
                }
            })();
        }

    }, [inspirePopup])



    return (
        <div className='bscontainer-fluid'>
            <ViewEditStore id="job-modal" data={inspireRow} mode={inspireMode} modalOpen={inspirePopup} onClose={() => setinspirePopup(false)} />
            {delPopup && <DeletePopup permition={delPopup} callback={deleteInspire} Toggle={() => setDelPopup(false)} />}

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
            <div className='row py-5'>
                <div className='col-12  mb-5'>
                    <div className='mb-3'>
                        <ul className="inline-flex flex-wrap text-sm font-medium">
                            <li className="flex items-center">
                                <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                </svg>
                            </li>
                            <li className="flex items-center">
                                Store
                            </li>
                        </ul>
                    </div>

                    <Link to="create-store" className="p-2 flex items-center rounded-sm w-[15%] bg-red-500 hover:bg-green-600 text-white" >
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Create Store</span>
                    </Link>
                </div>
                <div className='col-12 border'>
                    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                        <header className="px-5 py-4">
                            <h2 className="font-semibold text-slate-800">All Stores <span className="text-slate-400 font-medium">{allInspires.length}</span></h2>
                        </header>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                                    <tr>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">IMAGE</div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left"> STORE NAME</div>
                                        </th>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left"> STORE OWNER</div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">REGISTRATION NO</div>
                                        </th>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">DOB </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">START DATE </div>
                                        </th>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">CONTACT NO</div>
                                        </th>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">Actions</div>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody className="text-sm divide-y divide-slate-200">
                                    {allInspires.map((inspire) => {
                                        return (
                                            <tr key={inspire._id}>
                                                {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{inspire._id}</div>
                                                </td> */}
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <img src={`${HOSTNAME}${inspire?.businessImage}`} className="w-[100%] h-[50px] object-cover"/>
                                                </td>                                                               
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{inspire.storeName}</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{inspire.storeOwner}</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{inspire.registrationNo}</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{inspire.dob}</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{ moment(inspire.storeStartDate).format('ll')}</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left">{inspire.contactNo}</div>
                                                </td>

                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                    <div className="space-x-1">
                                                        <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openInspirePopup(e, "edit", inspire)}>
                                                            <span className="sr-only">Edit</span>
                                                            <svg className="w-8 h-8 fill-current text-red-500 hover:text-green-600" viewBox="0 0 32 32">
                                                                <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                                                            </svg>
                                                        </button>
                                                        <button className="text-slate-400 hover:text-slate-500 rounded-full" onClick={(e) => openInspirePopup(e, "view", inspire)}>
                                                            <IoEyeOutline className='text-red-500 hover:text-green-600' size={23} />
                                                        </button>
                                                        <button onClick={() => deletePopToggle(inspire?._id)} className="text-rose-500 hover:text-rose-600 rounded-full">
                                                            <span className="sr-only">Delete</span>
                                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                                                                <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Stores