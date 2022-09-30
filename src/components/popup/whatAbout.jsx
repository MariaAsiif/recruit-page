import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import bt from '../../beta_translation';
const Whatabout = ({ permition, Toggle, lang }) => {

  const handleClose = (e) => {
    Toggle(false)
  }

  return (
    <>

      <div className='form_popup '>
        <Modal open={permition} onClose={handleClose} center  >
          <div className='bscontainer-fluid max-h-[500px] p-0 '>
            <div className='row'>
              <div className='col-lg-12  text-center'>
                <h1 className='font-bold text-[25px]  mb-5'>{bt.public[lang]}</h1>
                <p>"{bt.humanity[lang]}"</p>
              </div>

              <div className='col-lg-6 mt-4 text-justify '>
                <h2 className='text-red-500 italic font-medium lg:mb-[50px] mb-3 text-left'>{bt.about_Public[lang]}</h2>
                <span>{bt.intro[lang]}</span>
              </div>


              <div className='col-lg-6 mt-5 text-justify '>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>  {bt.general[lang]}  </h2>
                <span >{bt.general_release[lang]}</span>
              </div>

              <div className='col-lg-6 mt-4 text-justify'>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>{bt.part[lang]} </h2>
                <span >{bt.multi[lang]}</span>
              </div>
              <div className='col-lg-6 mt-5 text-justify'>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>{bt.reward[lang]}</h2>
                <span >{bt.cybertruck[lang]}</span>
              </div>


              <div className='col-lg-12 mt-[30px] mb-[20px] text-center'>
                <p>"{bt.pain[lang]}"</p>
                <br />
                <span className='mt-[20px] '>"{bt.human[lang]}"</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Whatabout