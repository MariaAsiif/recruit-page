import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FcCheckmark } from 'react-icons/fc'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
const CreateAboutUs = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const [description, setdescription] = useState("")
    const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })


    const handleDiscription = (event, editor) => {
        const data = editor.getData();

        setdescription(data)

    }


    // ****************** DatePicker Content ***********
    const renderCustomInput = ({ ref }) => (
        < div className='relative cursor-pointer'>
            <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
                value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
                className={`date_picker  p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  border px-2 py-2`}
            />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>

        </div >
    )


    return (
        <div className='bscontainer-fluid'>
            <form>
                <div className='row p-11'>
                    <div className='col-12 mb-6'>
                        <div className='mb-3'>
                            <ul className="inline-flex flex-wrap text-sm font-medium">
                                <li className="flex items-center">
                                    <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/aboutus" className="text-slate-500 hover:text-indigo-500" >About Us </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/aboutus/create-aboutus" className="text-slate-500 hover:text-indigo-500" href="#0">Create About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new About Us</h2>
                        </header>
                    </div>

                    <div className='col-md-6'>
                        <label>Title</label>
                        <DatePicker
                            value={expiryDate}
                            onChange={setexpiryDate}
                            renderInput={renderCustomInput} // render a custom input
                            shouldHighlightWeekends
                        />
                    </div>
                    <div className='col-md-6'>
                        <label>Added by</label>
                        <select className='border p-2 focus:outline-blue-500 rounded-sm w-full'>
                            <option value="">Select Added By</option>
                            <option>Super Amin</option>
                            <option>Amin</option>
                            <option>User</option>
                        </select>
                    </div>
                    <div className='col-md-12 mt-3'>
                        <label>Desccription</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={description}
                            config={{
                                toolbar: ['bold', 'italic', 'link', 'undo', 'redo', 'numberedList', 'bulletedList']
                            }}
                            onChange={handleDiscription}

                        />

                    </div>
                    <div className='col-md-12 mt-3'>
                        <button className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateAboutUs