import React from 'react';
import Flag from '../../../../../assets/landingImages/Flag1.svg'


const LocationMarker = ({lat,lng,onClick}) => {
  return (
    <div className='location-marker' onClick={onClick}>
     <img src={Flag} className="location-icon"/>
    </div>
  )
}

export default LocationMarker