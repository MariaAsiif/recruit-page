import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { callApi } from '../../utils/CallApi';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object({
  question: yup.string().required(),
  marks: yup.string().required(),
  industry: yup.string().required()
}).required();


const initialState = [
  { answerText: "", correctness: false },
  { answerText: "", correctness: false },
  { answerText: "", correctness: false },
  { answerText: "", correctness: false },
]


const CreateQuestion = () => {
  const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const [answers, setAnswers] = useState(initialState)

  const [industry, setIndustry] = useState([])


  const handleAnswerOption = (e, i) => {
    const { name, value } = e.target;
    let list = [...answers];
    for (let j = 0; j < list.length; j++) {
      const elements = list[j];
      if (j === i) {
        elements.correctness = true;
      }
      else {
        elements.correctness = false
      }

    }
    setAnswers(list)
  }


  const handleAnswer = (e, i) => {
    const { name, value } = e.target;
    let list = [...answers];
    list[i][name] = value;
    setAnswers(list)
  }

  const onSubmit = async (data) => {

    try {

      let payload = {
        "industryid": data?.industry,
        "questionText": data?.questionText,
        "answers": answers
      }

      let response = await callApi('/questions/createQuestion', 'post', payload);
      if (response.status === "Success") {
        reset()
        setAnswers(initialState)
        toast.success(response.message);

      }
      else {
        toast.error(response.message);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let fetch = async () => {
      let payload = {
        "sortproperty": "created_at",
        "sortorder": -1,
        "offset": 0,
        "limit": 50,
        "query": {
          "critarion": { "active": true },

          "addedby": "_id email first_name",
          "questionsFields": "_id questionText answers marks",
          "lastModifiedBy": "_id email first_name"
        }

      }

      let res = await callApi('/industries/getIndustriesWithFullDetails', 'post', payload);
      setIndustry(res?.data?.industries)
    }
    fetch()
  }, [])



  return (
    <div className='bscontainer-fluid'>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='row p-11'>
          <div className='col-12 mb-6'>
            <div className='mb-3'>
              <ul className='inline-flex flex-wrap text-sm font-medium'>
                <li className="flex items-center">
                  <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >dashboard </Link>
                  <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                  </svg>
                </li>
                <li className='flex items-center'>
                  <Link
                    to='/tutorial'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Questions
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>
                  <Link
                    to='/create-tutorial'
                    className='text-slate-500 hover:text-indigo-500'
                    href='#0'
                  >
                    Create Questions
                  </Link>
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Questions</h2>
            </header>
          </div>
          <div className='col-lg-6 mb-4 relative border p-2'>

            <div className="flex justify-between items-center">
              <label className='block text-sm font-medium mb-1' htmlFor='name'>
                Industry
              </label>
            </div>
            <select
              {...register('industry')}
              name="industry"
              id="industry"
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.industry && 'border-red-500'}`}
            >
              <option value="">Select Industry</option>
              {
                industry.map((item, i) => (
                  <option key={i} value={item?._id}>{item?.industryName}</option>
                ))
              }
            </select>
            {errors.industry && (
              <p className="text-red-500 text-sm">{errors.industry.message}</p>
            )}

            <div className="flex justify-between items-center">
              <label className='block text-sm font-medium mb-1' htmlFor='name'>
                Question
              </label>
            </div>
            <input
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
              name='questionText'
              id='questionText'
              {...register('question')}
              type='text'
              placeholder='Question Title '
            />
            {errors.question && (
              <p className="text-red-500 text-sm">{errors.question.message}</p>
            )}

            {
              answers.map((item, i) => (
                <div className='row pt-5'>

                  <div className='col-lg-6' key={i}>
                    <label className='block text-sm font-medium mb-1' htmlFor='name'>
                      Answer Option
                    </label>
                    <input
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
                      name='answerText'
                      id='answerText'
                      type='text'
                      onChange={(e) => handleAnswer(e, i)}
                      value={item.answerText}
                      placeholder='Answer'
                    />
                  </div>
                  <div className='col-lg-6 mb-4 relative'>
                    <div>
                      <div className='text-sm text-slate-800 font-semibold mb-3'>
                        Correctness
                      </div>
                      <div className='flex items-center'>

                        <label className="inline-flex relative items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="correctness"
                            checked={item?.correctness}
                            onChange={(e) => handleAnswerOption(e, i)}
                            className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <div className='text-sm text-slate-400 italic ml-2'>
                            {/* { ? 'True' : 'False'} */}
                          </div>
                        </label>

                      </div>

                    </div>
                  </div>
                </div>
              ))
            }

            <div className="flex justify-between items-center">
              <label className='block text-sm font-medium mb-1' htmlFor='name'>
                Marks
              </label>
            </div>
            <input
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
              name='marks'
              id='marks'
              {...register('marks')}
              type='text'
              placeholder='Marks '
            />
            {errors.marks && (
              <p className="text-red-500 text-sm">{errors.marks.message}</p>
            )}

          </div>


          <div className='col-lg-12'>
            <button className='p-2 mx-2 bg-red-500 hover:bg-green-600 text-white'>
              Submit
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CreateQuestion;
