import React, { useState } from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import QuizCard from './QuizCard';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const Assesment = (props) => {

    const [assessmentQuestions, setAssessmentQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(assessmentQuestions[0]);
    let [currentStep, setCurrentStep] = useState(1)
    const [count, setCount] = useState(1);
    const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

    useEffect(() => {
        let fetchData = async () => {
            const res = await fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`)
            let { results } = await res.json();
            // setAssessmentQuestions(results)
            console.log("rs", results)
            const quiz = results.map((questionObj) => {
                return {
                    question: questionObj.question,
                    answer: questionObj.correct_answer,
                    correct_answer: questionObj.correct_answer,
                    option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
                }
            })
            setAssessmentQuestions(quiz)

        }
        fetchData()
    }, [])


    const handleSubmit = (e, ans  , setSelectedAns) => {
        e.preventDefault();
        console.log("ans", ans)
        let len = assessmentQuestions.length - 1
        if (ans !== "") {
            if (currentStep !== len) {
                setCurrentStep(++currentStep);
                setSelectedAns("")
            }
            else {
                props.onNext("IdentityVerification")
            }
        }
        else {
            toast.error('Select one')
        }


        // onClick={() => {
        //     if (count < assessmentQuestions.length) {
        //         setCount(count + 1)
        //         setCurrentQuestion(assessmentQuestions[count])
        //     } else if (count === assessmentQuestions.length) {
        //         props.onNext("IdentityVerification")
        //     }
        // }} 

    }




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
                        <div className='w-full h-[1px] bg-[#E84125] '></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
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
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
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

                        <QuizCard

                            options={assessmentQuestions[currentStep]?.option}
                            question={assessmentQuestions[currentStep]?.question}
                            total={assessmentQuestions?.length}
                            callback={handleSubmit}
                            curruntQuestion={currentStep}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Assesment