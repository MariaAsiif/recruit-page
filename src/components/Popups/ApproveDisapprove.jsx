import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const ApproveDisApprove = ({ permition, Toggle, callback, ActionType }) => {
    const [show] = useState(permition)

    const handleClose = (info) => {
        if (info === "yes") {
            Toggle(false)
            callback()
        }
        else {
            Toggle(false)

        }
    };


    return (
        <div>
            <Modal open={show} onClose={() => handleClose("no")} center>
                <div className='p-2 thank_you_form ' >
                    <h1 className='text-[30px] font-bold'> Are You Sure! </h1>
                    {ActionType === "approved" ?
                        <p className='text-[15px] font-samibold mt-2'> Your want to approve this user. </p>
                        :
                        <p className='text-[15px] font-samibold mt-2'> Your want to disapprove this user. </p>
                    }
                    <div className='flex flex-col'>
                        <button onClick={() => handleClose("yes")} className='bg-blue-500 w-[100%]  text-white'>Yes </button>
                        <button onClick={() => handleClose("no")} className='bg-red-500 text-white'>No</button>
                    </div>
                </div>
            </Modal>


        </div >
    )
}

export default ApproveDisApprove
