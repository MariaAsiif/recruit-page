import React,{useState} from 'react'
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { HOSTNAME, callApi } from '../../utils/CallApi';
import { toast } from 'react-toastify';
import { updateProfile } from '../../Redux/RecruitAuthSlice/RecruitAuthSlice';
const MainProfile = () => {
    const { profile_picture_url, first_name, _id } = useSelector((state) => state?.recruitAuth?.userInfo)
    const [File, setFile] = useState('')


    const dispatch = useDispatch()

    const handleChangeFile = async (e) => {
        let update = async (pic) => {
            let payload = {
                "_id":_id,
                "profile_picture_url": pic,
                "active": true
                
            }
            let res = await callApi('/uploads/uploadUserDp', 'post', payload)
            dispatch(updateProfile(res.url))
            console.log("Res", res)
        }

        let file = e.target.files[0]
        let formData = new FormData();    
        formData.append('file', file);   //append the values with key, value pair
    
        try {
            const res = await callApi("/users/updateprofilepic", "post", formData)
            if (res.status === "Success") {
                setFile(res.data?.profile_picture_url)
                update(res.data?.profile_picture_url)
                toast.success(res.message);
            }
            else {
                toast.error(res.message);
    
            }
    
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='bg-white rounded-xl p-4 text-center'>
            <span className='p-[2px] border-2 border-[#65A33A] inline-block rounded-full relative'>
                <img className=' w-full h-[130px] max-w-[136px] object-cover rounded-full' alt="profile" src={`${profile_picture_url}`} />
                <label className='absolute cursor-pointer bottom-3 right-0 bg-[#42946C] text-white p-[7px] rounded-full' >
                    <FiEdit size={15} />
                    <input type="file" onChange={handleChangeFile} hidden />
                </label>
            </span>
            <h1 className='font-sans font-bold text-[#65A33A] text-xs'>{first_name}</h1>
            <h1 className='font-light text-[#626973] text-[8px]'>UI/UX Designer at Google</h1>
        </div>
    )
}

export default MainProfile