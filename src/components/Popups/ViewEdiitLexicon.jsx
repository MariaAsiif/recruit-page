import React, { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { callApi } from '../../utils/CallApi';
import { data } from 'autoprefixer';
const ViewEditLexicon = (props) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange ', });
    const [file, setFile] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const onSubmit = async (values) => {
        let value = {
            lexiconid: props.data._id,
            lexiconName : values?.lexiconName ,
            description: values.description ,
            active: true
        }

        console.log("value" , value)

        const res = await callApi("/lexicons/updateLexicon", "post", value)
        if (res.status === "Success") {
            toast.success(res.message);
            props.onClose()
            setFile('')
        }
        else {
            toast.error(res.message);

        }
    }
   
    useEffect(() => {
        reset(props.data);

    }, [props.data, reset]);
    return (
        <Modal open={props.open} onClose={props.onClose} center  >
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row p-5'>
                        <div className='col-lg-12 mb-5'>
                            <label className="block text-lg text-left font-medium mb-1" htmlFor="description">HEADING</label>
                            {props.mode === "view" ?
                                (

                                    <p>{props.data.lexiconName}</p>

                                ) : (
                                    <>
                                      
                                    <input    {...register("lexiconName", { required: true })} className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.lexiconName ? "border-red-500" : "border-green-500"}`} />
                                      
                                    </>
                                )}
                            {errors.logoFile && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-12 mb-5'>
                            <label className="block text-lg text-left font-medium mb-1" htmlFor="description">DESCRIPTION</label>
                            {props.mode === "view" ?
                                (
                                    <p>{props.data.description}</p>
                                ) : (

                                    <textarea    {...register("description", { required: true })} className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.description ? "border-red-500" : "border-green-500"}`} />
                                )}
                            {errors.description && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-12 mt-10'>
                            {props.mode === "edit" &&
                                <button className="p-2 bg-red-500 hover:bg-green-600 text-white" type='submit' >Update</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ViewEditLexicon