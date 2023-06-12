import React, { useState } from 'react'
import { IoChevronForward } from 'react-icons/io5';

const QuizCard = ({ question, options, callback, curruntQuestion , total }) => {
    let [selectedAns, setSelectedAns] = useState("")


    const HendleChange = (e) => {
        setSelectedAns(e.target.value);
    }

    return (
        <>
            <h1 className='text-[#626973] font-sans text-lg font-bold mb-2'>Question <span className='text-sm font-normal'>Total :  {curruntQuestion}  / {total} </span>
            </h1>
            <p className='text-sm pl-4 font-normal text-[#626973] mb-2'>{question}</p>
            <form onSubmit={(e) => callback(e, selectedAns , setSelectedAns)
            }>
                <ul className='ml-10'>
                    {options?.map((opt, index) => (

                        <li>
                            <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3 py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                {/* <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span> */}
                                <input type="radio" onChange={HendleChange} className='' value={opt} checked={selectedAns === opt} name="provider" />
                                <span className="text-[#626973] mx-2">{opt}</span>
                            </label>
                        </li>
                    ))
                    }
                </ul>
                <div className='mb-3 text-right col-lg-12'>
                    <button className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>{curruntQuestion === total ? 'Finish' : 'Next'}<IoChevronForward className='inline' /></button>
                </div>
            </form>
        </>
    )
}

export default QuizCard