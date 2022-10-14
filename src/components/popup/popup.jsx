import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import logoImage from '../../images/logo.png'
import tt from '../../term_translation';
const PopUp = ({ permition, Toggle, lang }) => {

  const handleChange = (e) => {
    Toggle(false)
  }

  return (
    <>

      <div className='form_popup'>
        <Modal open={permition} center  >
          <div className='bscontainer'>
            <div className='row'>
              <div className='col-lg-12 font-sans  max-h-[500px] overflow-y-auto text-justify'>
                <div className='mb-5 flex justify-center lg:justify-start'>
                  <img src={logoImage} className="lg:w-[30%] w-[30%]" alt="logo_image" />
                </div>
                <h1 className='font-sans font-bold text-[30px] mb-2 text-center'>Beta</h1>
                <h1 className='font-sans font-bold text-[24px] mb-5 text-center'>{tt.terms[lang]}</h1>
                <div className='flex mb-8'>
                  <span >1.0</span>
                  <span className='lg:pl-8'> {tt.site[lang]} <a href="http://www.hporx.eu/finsac-public-beta" className='text-blue-500' target="_blank" rel="noreferrer">http://www.hporx.eu/finsac-public-beta </a>(the "Site")</span>
                </div>
                <h1 className='mb-5'>{tt.ireland[lang]}(<span className='font-medium'>HPO Rx</span>){tt.provides[lang]} <a href="www.hporx.eu" className='text-blue-500' target="_blank">www.hporx.eu </a>⦁	, ⦁	<a href="www.hporx.com" className='text-blue-500' target="_blank">www.hporx.com </a>{tt.alternative[lang]}
                  <a href="http://www.hporx.eu/finsac-public-beta" className='text-blue-500' target="_blank" rel="noreferrer">http://www.hporx.eu/finsac-public-beta </a>(the "beta Site").  feedback of their public beta</h1>
                <h1 className='lg:pl-12 mb-5'> {tt.ecommerce[lang]} </h1>
                <h1 className='lg:pl-12 mb-5'>
                  {tt.states[lang]}   (<span className='font-medium'>HPO Rx</span>) {tt.modify[lang]}
                </h1>
                <h1 className='lg:pl-12 mb-5'>
                  {tt.review[lang]} (<span className='font-medium'>HPO Rx</span>) {tt.aware[lang]}
                </h1>
                <h1 className='font-sans font-bold text-xl mb-5'><span className='font-normal'>2.0 </span>{tt.use[lang]}</h1>
                <h1 className='mb-5'>
                  {tt.understand[lang]} (<span className='font-medium'>HPO Rx</span>)  {tt.operate[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.warrant[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.guarantee[lang]}
                </h1>
                <h1 className='mb-1 font-medium'> {tt.copyright[lang]} </h1>
                <h1 className='mb-5'>
                  {tt.intellectual[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.limited[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.event[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.store[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.connection[lang]} <a href='http://www.hporx.eu/finsac-public-beta.' target="_blank" rel="noreferrer">http://www.hporx.eu/finsac-public-beta.</a>
                </h1>
                <h1 className='mb-5'>
                  {tt.illegal[lang]}
                  <span className='font-medium'> {tt.counsel[lang]} </span>
                </h1>
                <h1 className='mb-1 font-medium'>4.0 Trade marks</h1>
                <h1 className='mb-5'>
                  {tt.product[lang]}
                </h1>
                <h1 className='mb-1 font-medium'>{tt.liability[lang]} </h1>
                <h1 className='mb-5'>
                  {tt.basis[lang]}
                </h1>
                <h1 className='mb-1 font-medium'> {tt.indemnification[lang]} </h1>
                <h1 className='mb-5'>
                  {tt.indemnify[lang]}
                </h1>
                <h1 className='mb-1 font-medium'> {tt.wareenty[lang]}</h1>
                <h1 className='mb-5'>
                  {tt.facilities[lang]}
                </h1>
                <h1 className='mb-1 font-medium'>{tt.disclaimer[lang]}</h1>
                <h1 className='mb-5'>
                  {tt.section[lang]}
                </h1>
                <h1 className='mb-1 font-medium'>{tt.disputes[lang]}</h1>
                <h1 className='mb-5'>
                  {tt.governed[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.proceeding[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.insist[lang]}
                </h1>
                <h1 className='mb-5'>
                  {tt.unenforceable[lang]}
                </h1>

                <h1 className='text-center text-[25px] font-medium '>{tt.disclaimer[lang]}</h1>
                <div className='flex justify-around'>
                  <div className='mt-[1rem] flex items-center check_term'>
                    <input type="checkbox" className=' w-[20px] h-[18px]' onChange={handleChange} />
                    <span className='text-[16px] ml-2 text-gray-400'>{tt.agree[lang]}</span>
                  </div>
                  <div className='mt-[1rem] mr-4 flex items-center check_term'>
                    <input id="demo_box_2" class="css-checkbox" type="checkbox" />
                    <label for="demo_box_2" name="demo_lbl_2" class="css-label">{tt.disagree[lang]}</label>
                    {/* <input type="checkbox" className='css-checkbox w-[20px] h-[18px]' onChange={handleChange} />
                    <span className='text-[16px] ml-2 text-gray-400'>{tt.disagree[lang]}</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default PopUp