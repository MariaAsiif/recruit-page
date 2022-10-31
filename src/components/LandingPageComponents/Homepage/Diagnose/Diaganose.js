import React from 'react'
import DiagnoseSlick from './DiagnoseSlick'
import { DiagnoseMainContainer } from './StyledDiagnose'

const Diaganose = ({ id }) => {
  return (
    <DiagnoseMainContainer id={id} >
      <div class="accordion-item ml-[15px] mr-[15px] bg-white  mx-2 border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingTwo">
          <button class="
        accordion-button
        collapsed
        relative
        flex
        lg:grid
        md:grid
        items-center
        w-full
        py-4
        px-4
        text-base text-gray-800 
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" style={{ justifyContent: 'inherit' }} data-bs-target="#collapseTwo" aria-expanded="false"
            aria-controls="collapseTwo">
            <h3 >WorkSpace</h3>

          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <p>TELE-MEDICINE + TELE-DIAGNOSE IS THE SOLUTION + GLOBAL DIAGNOSTIC CENTER</p>

          </div>
        </div>
      </div>


      <DiagnoseSlick />
    </DiagnoseMainContainer>
  )
}

export default Diaganose