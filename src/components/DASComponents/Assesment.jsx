import React, { useState } from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
const Assesment = (props) => {

    const [assessmentQuestions, setAssessmentQuestions] = useState([
        {
            id: 1,
            question: "Question 1",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 2,
            question: "Question 2",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 3,
            question: "Question 3",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 4,
            question: "Question 4",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 5,
            question: "Question 5",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 6,
            question: "Question 6",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 7,
            question: "Question 7",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 8,
            question: "Question 8",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 9,
            question: "Question 9",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
        {
            id: 10,
            question: "Question 10",
            options: [
                {
                    optionId: "A",
                    option: "Alpha"
                },
                {
                    optionId: "B",
                    option: "Bravo"
                },
                {
                    optionId: "C",
                    option: "Charli"
                },
                {
                    optionId: "D",
                    option: "Doremon"
                },
            ]
        },
    ])
    const [currentQuestion, setCurrentQuestion] = useState(assessmentQuestions[0]);
    const [count, setCount] = useState(1);

    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Assesment</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Following is the assessment evaluation criteria</p>
                <div className='flex justify-center mb-4'>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaRegUser size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
                            <FaUnlockAlt size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckCircle size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                </div>
                <div className=' row g-0'>

                    <div style={{ boxShadow: "inset 0px 0px 0px #00000010, 0px 0px 6px #00000002" }} className='col-lg-12 mb-3 border border-[#70707045] p-3 '>
                        <h1 className='text-[#626973] font-sans text-lg font-bold mb-2'>Question <span className='text-sm font-normal'>{count} of {assessmentQuestions.length}</span></h1>
                        <p className='text-sm pl-4 font-normal text-[#626973] mb-2'>{currentQuestion.question}</p>
                        <ul className='ml-10'>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3 py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">{currentQuestion.options[0].option}</span>
                                </label>
                            </li>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3  py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">{currentQuestion.options[1].option}</span>
                                </label>
                            </li>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3  py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">{currentQuestion.options[2].option}</span>
                                </label>
                            </li>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3  py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">{currentQuestion.options[3].option}</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-3 text-right col-lg-12'>
                        <button onClick={() => {
                            if (count < assessmentQuestions.length) {
                                setCount(count + 1)
                                setCurrentQuestion(assessmentQuestions[count])
                            } else if (count === assessmentQuestions.length) {
                                props.onNext("Dashboard")
                            }
                        }} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>{count === assessmentQuestions.length ? "Submit" : "Next"} <IoChevronForward className='inline' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Assesment