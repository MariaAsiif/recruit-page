import React from 'react'
import { Container } from 'react-bootstrap'
import { PrimaryHeading } from '../../Globals/Globals'
import { LocateImg, LocateMainContainer } from './StylesLocate'
import Inputs from './Inputs'
import './locate.css'
const Locate = ({ id }) => {
  return (
    <LocateMainContainer id={id}>
      <div className='text-center'>
        <div className="accordion-item mx-2 bg-white border border-gray-200 mb-3">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button className="
        accordion-button
        collapsed
        relative
        lg:grid
        md:grid
        flex
        items-center
        w-full
        py-4
        px-4
        text-gray-800
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{justifyContent:'inherit'}} aria-expanded="false"
              aria-controls="collapseTwo">
              <PrimaryHeading>LOCATE</PrimaryHeading>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              <h3>DOCTORS, ASSOCIATIONS, CANNABIS CLUBS, CAFES, DISPENSARIES AND LAWYERS</h3>
              <p>
                Welcome, the above-listed professionals and services can be found using our mapping locator function. The service is provided to all clients and visitors at no charge. However, we request your feedback and use of the service to assess the quality of the assistance you encountered from any of those using the locator. That information will be shared with your peers seeking a similar experience if satisfactory or avoid any establishment that doesn't afford them excellent treatment or a high-quality product, goods, or service. The search function is powered by Google Maps technologies, it will direct you to any of the stated services available nearest your hotel, if traveling, or your current in-country location.
              </p>
            </div>
          </div>
        </div>



      </div>
      <Inputs />
    </LocateMainContainer>
  )
}

export default Locate