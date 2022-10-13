import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import devfas from '../../../../../assets/landingImages/dev.png'
const SingleMap = (props) => {
  const [defualtLocation, setDefualtLocation] = useState({ defaultlat: 38.3628000, defaultlon: -4.6806000 })
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [drageAbleMarkerPosition, setdrageAbleMarkerPosition] = useState({ lat: '', lng: '' })
  const [activeMarker, setActiveMarker] = useState({})
  const [instituteInfo, setInstituteInfo] = useState({})


  const { locationData } = props

  console.log("locationData", locationData)

  const moveMarker = (coord, map, t) => {


    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    let location = {
      type: "Point",
      coordinates: [lng, lat]
    }
    props.default(location)

    // props.setInstituteLocation(location) //sending location to create new service form

    setActiveMarker(map)
    setdrageAbleMarkerPosition({
      lat: lat,
      lng: lng
    })

    setDefualtLocation({
      defaultlat: lat,
      defaultlon: lng
    })


    // var latlng = new window.google.maps.LatLng(lat, lng);
    // // This is making the Geocode request
    // var geocoder = new window.google.maps.Geocoder();
    // geocoder.geocode({ 'latLng': latlng }, (results, status) => {
    //   if (status !== window.google.maps.GeocoderStatus.OK) {
    //     alert(status);
    //   }
    //   // This is checking to see if the Geoeode Status is OK before proceeding
    //   if (status == window.google.maps.GeocoderStatus.OK) {
    //     console.log('results');
    //     console.log(results);
    //     var address = (results[0].formatted_address);
    //     console.log('address')
    //     console.log(address)
    //     props.setserviceaddress(address)
    //     props.setInstituteAddress(address)
    //   }
    // })
  } //end moveMarker


  const getCurrentPosition = () => {
    console.log("getCurrentPosition in map called")
    if (navigator.geolocation) {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      )
    } else {
      return new Promise((resolve) => resolve({}))
    }
  } //end getCurrentPosition




  const handleMarkerClick = (props, marker, e) => {
    let institute = {
      name: props.name,
      address: props.address
    }
    setInstituteInfo(institute)
    setActiveMarker(marker)
    setShowInfoWindow(true)
  }

  const handleClose = () => {
    setActiveMarker(null)
    setShowInfoWindow(false)
  }




  console.log("props", props)
  return (
    <div style={{height:'450px' , position:'relative' , marginTop:'40px'}}>


      <Map
        google={props.google}
       
        initialCenter={{
          lat: 38.3628000,
          lng: -4.6806000,
        }}
        zoom={props.zoom}

      >
      
        <Marker
          title="Location"
          name={"locationpicker"}
          position={{ lat: defualtLocation.defaultlat, lng: defualtLocation.defaultlon }}
          draggable={true}
          // onDragend={(t, map, coord) => moveMarker(coord, map, t)}
          key={"locationpicker"}
          icon={"http://maps.google.com/mapfiles/ms/icons/green.png"}
          onClick={handleMarkerClick}
        ></Marker>

       


        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={handleClose}
        >
          <div>
            {(() => {
              if (activeMarker != null) {
                if (activeMarker.name != "locationpicker") {
                  return (
                    <div>
                      <label key={instituteInfo.name}>

                        <span className="text-sky">
                          {instituteInfo.name}{" "}
                        </span>
                      </label>
                      <br />
                      <label key={instituteInfo.address}>

                        {instituteInfo.address}
                      </label>
                    </div>
                  );
                } else {
                  return (
                    <div key={"dragediv"}>
                      <label>Drag Me</label>
                    </div>
                  );
                }
              } else {
                return <div key={"empty"}></div>;
              }
            })()}
          </div>
        </InfoWindow>


      </Map> 

      <div style={{ position: 'absolute', bottom: '0px' }}>
        <img src={devfas} style={{ width: '50px', height: '50px' }} alt="devlop" />
      </div>

    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0tGMAgpuMIlO51AcuBmxpOWtRGa76Fro",
})(SingleMap)