import React, { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { callApi } from '../../utils/CallApi';
const ViewEditTicker = (props) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange ', });
    const [file, setFile] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const onSubmit = async (values) => {
        // let value = {
        //     tickerid: data._id,
        //     logoFile : file || data?.logoFile,
        //     tickerText: values.tickerText,
        //     active: true
        // }

        let formdata = new FormData()
        formdata.append('logoimg', file || props.data?.logoFile,);
        formdata.append('request', JSON.stringify({
            tickerid: props.data._id,
            tickerText: values.tickerText || props.data?.tickerText,
            "active": true
        }));

        const res = await callApi("/tickers/updateTicker", "post", formdata)
        if (res.status === "Success") {
            console.log("Res", res)
            toast.success(res.message);
            props.onClose()
            setFile('')
        }
        else {
            toast.error(res.message);

        }
    }
    const handleChangeImage = (e) => {
        let file = e.target.files[0]
        setFile(file)

        let url = URL.createObjectURL(file)
        setFileUrl(url)

    }
    useEffect(() => {
        reset(props.data);

    }, [props.data, reset]);
    return (
        <Modal open={props.open} onClose={props.onClose} center  >
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row p-5'>
                        <div className='col-lg-4 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">LOGO IMAGE</label>
                            {props.mode === "view" ?
                                (

                                    <img src={`https://hporxadminbackend.herokuapp.com${props.data?.logoFile}`} className="w-44  " alt="image_logo" />

                                ) : (
                                    <>
                                        <label htmlFor='logo'>
                                            {fileUrl ?
                                                <img src={fileUrl} className="w-44" alt="image_logo" />
                                                :
                                                <img src={`https://hporxadminbackend.herokuapp.com${props.data?.logoFile}`} className="w-44  " alt="image_logo" />
                                            }
                                        </label>

                                        <input id="logo" onChange={handleChangeImage} type="file" className='hidden pointer' />
                                    </>
                                )}
                            {errors.logoFile && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-8 mb-5'>
                            <label className="block text-lg font-medium mb-1" htmlFor="description">TICKER TEXT</label>
                            {props.mode === "view" ?
                                (
                                    <p>{props.data.tickerText}</p>
                                ) : (

                                    <input    {...register("tickerText", { required: true })} className={`form-input w-full ${errors.tickerText ? "border-red-500" : "border-green-500"}`} />
                                )}
                            {errors.tickerText && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='col-lg-12 mt-10'>
                            {props.mode === "edit" &&
                                <button className="btn bg-red-500 hover:bg-green-600 text-white" type='submit' >Update</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ViewEditTicker