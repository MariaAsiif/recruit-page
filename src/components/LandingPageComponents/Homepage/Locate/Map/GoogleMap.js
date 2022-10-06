import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, DirectionsRenderer } from "google-maps-react"
import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

import "@reach/combobox/styles.css";
import GooglePlaceSidebar from './GooglePlaceSidebar/GooglePlaceSidebar';
import { AiFillCar } from 'react-icons/ai'
import { BiWalk, BiBus } from 'react-icons/bi'
import { BsBicycle } from 'react-icons/bs'
import { FaSubway, FaTram } from 'react-icons/fa'
import { GiRailRoad } from 'react-icons/gi'
const GoogleMap = (props) => {
  const [serviceMarkers, setserviceMarkers] = useState([])
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [instituteInfo, setInstituteInfo] = useState({})
  const [mapLocation, setmapLocation] = useState({ lat: 0, lng: 0 })
  const [markerLocation, setmarkerLocation] = useState({ lat: 0, lng: 0 })
  const [showSidebar, setshowSidebar] = useState(false)
  const [sidebarData, setsidebarData] = useState({})
  const [directions, setdirections] = useState(null)


  //  -------------------
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete();
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions()
    const results = await getGeocode({ address })

    const { lat, lng } = await getLatLng(results[0])
    console.log(results[0]);
    const parameter = { placeId: results[0].place_id, };
    const placeDetails = await getDetails(parameter)
    setshowSidebar(true)
    setsidebarData(placeDetails)
    setmarkerLocation({
      lat, lng
    })
    setmapLocation({
      lat, lng
    })
  };


  const moveMarker = (coord, map, t) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    props.onMoveMarker({ lat, lng })
    // setActiveMarker(map)

  }

  const onMapClicked = (mapProps) => {
    if (showInfoWindow) {
      setShowInfoWindow(false)
      setActiveMarker(null)
    }
  }
  const onMarkerClick = (props, marker, service) => {
    console.log("onMarkerClick called")
    console.log(props)

    let { data } = props
    let drivingDistance = data[0].distance
    let drivingDuration = data[0].duration
    let walkingDistance = data[1].distance
    let walkingDuration = data[1].duration
    let bicyclingDistance = data[2].distance
    let bicyclingDuration = data[2].duration
    let busDistance = data[3].distance
    let busDuration = data[3].duration
    let subwayDistance = data[4].distance
    let subwayDuration = data[4].duration
    let trainDistance = data[5].distance
    let trainDuration = data[5].duration
    let tramDistance = data[6].distance
    let tramDuration = data[6].duration
    let railDistance = data[7].distance
    let railDuration = data[7].duration
    let institute = {
      name: props.name,
      drivingDistance,
      drivingDuration,
      walkingDistance,
      walkingDuration,
      bicyclingDistance,
      bicyclingDuration,
      busDistance,
      busDuration,
      subwayDistance,
      subwayDuration,
      trainDistance,
      trainDuration,
      tramDistance,
      tramDuration,
      railDistance,
      railDuration
    }
    setmapLocation({
      lat: service.serviceLocation.coordinates[1],
      lng: service.serviceLocation.coordinates[0],
    })
    setInstituteInfo(institute)
    setActiveMarker(marker)
    setShowInfoWindow(true)

    console.log("props", props.google.maps);
    console.log("maps", props.google.maps);
    console.log("marker", marker);
    console.log("service", service);
    // const dddd = new props.google.maps.DirectionsService();

    // console.log(dddd);
    // dddd.route({
    //   origin: {
    //     lat: service.serviceLocation.coordinates[1],
    //     lng: service.serviceLocation.coordinates[0],
    //   },
    //   destination: {
    //     lat: 40.4409177,
    //     lng: -3.7180893,
    //   },
    //   travelMode: props.google.maps.TravelMode.DRIVING

    // }, (results, status) => {
    //   if (status === "OK" && results) {
    //     console.log(results);
    //     setdirections(results)
    //   }
    // })
  }

  const handleClose = () => {
    setActiveMarker(null)
    setShowInfoWindow(false)
  }
  useEffect(() => {
    setserviceMarkers(props.data)

    setmarkerLocation({
      lat: props.markerLocation.latitude,
      lng: props.markerLocation.longitude,
    })

    setmapLocation({
      lat: props.mapLocation.latitude,
      lng: props.mapLocation.longitude,
    })

  }, [props.data, props.markerLocation, props.mapLocation])
  return (
    <>

      <div className='map' style={{ position: 'relative' }}>
        <div style={{ position: "absolute", zIndex: 10, top: 13 }}>
          <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput className='custom_ComboboxInput' value={value} onChange={handleInput} placeholder="Search any place" disabled={!ready} />
            <ComboboxPopover>
              <ComboboxList  >
                {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </div>
        <GooglePlaceSidebar showSidebar={showSidebar} sidebarData={sidebarData} />
        <Map  onClick={onMapClicked} google={props.google} center={{ lat: mapLocation.lat, lng: mapLocation.lng }} zoom={props.zoom}   >
          <Marker
            title="Location"
            name={"locationpicker"}
            position={{ lat: markerLocation.lat, lng: markerLocation.lng }}
            draggable={true}
            onDragend={(t, map, coord) => moveMarker(coord, map, t)}
            key={"locationpicker"}
            icon={"http://maps.google.com/mapfiles/ms/icons/green.png"}
            onClick={(props, marker) => onMarkerClick(props, marker)}
          />
          {/* <Marker
          icon={"http://maps.google.com/mapfiles/ms/icons/yellow.png"}
          name={"asdfsf"}
          placeIndex={1}
          position={{ lat: 40.4435411, lng: -7.9361573 }} /> */}

          {directions && <DirectionsRenderer directions={directions} />}
          {serviceMarkers.map((service, i) => {
            return (
              <Marker
                key={i}
                icon={"http://maps.google.com/mapfiles/ms/icons/yellow.png"}
                name={service.serviceName}
                data={service.distances}
                placeIndex={i}
                onClick={(props, marker) => onMarkerClick(props, marker, service)}
                position={{ lat: service.serviceLocation.coordinates[1], lng: service.serviceLocation.coordinates[0] }} />
            )
          })}



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
                      <div className='p-3'>
                        <label key={instituteInfo.name}>

                          <span className="text-sky " style={{fontSize:'18px' , fontStyle:'bold'}}>
                            {instituteInfo.name}{" "}
                          </span>
                        </label>
                        <br />
                        <div>
                          <ul style={{display:'flex', justifyContent:'space-between' , marginTop:'20px'}}>
                            <li style={{ listStyle: 'none' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <AiFillCar style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.drivingDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.drivingDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <BiWalk style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.walkingDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.walkingDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <BsBicycle style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.bicyclingDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.bicyclingDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <BiBus style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.busDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.busDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FaSubway style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.subwayDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.subwayDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FaSubway style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.trainDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.trainDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FaTram style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.tramDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.tramDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                            <li style={{ listStyle: 'none' , marginLeft:'15px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <GiRailRoad style={{ fontSize: '18px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'10px' }}>
                                  <h2 style={{ fontSize: '12px' }}>Distance: <span style={{ fontSize: '10px' }}> {instituteInfo.railDistance}</span> </h2>
                                  <h2 style={{ fontSize: '12px' }}>Duration: <span style={{ fontSize: '10px' }}> {instituteInfo.railDuration}</span> </h2>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* <label key={instituteInfo.address}>

                        Mode:  Driving
                      Distance:  {instituteInfo.drivingDistance}
                      Duration:  {instituteInfo.drivingDuration}

                      Mode:  Walking
                      Distance:  {instituteInfo.walkingDistance}
                      Duration:  {instituteInfo.walkingDuration}

                      Mode:  Bicycling
                      Distance:  {instituteInfo.bicyclingDistance}
                      Duration:  {instituteInfo.bicyclingDuration}

                      Mode:  Bus
                      Distance:  {instituteInfo.busDistance}
                      Duration:  {instituteInfo.busDuration}

                      Mode:  Subway
                      Distance:  {instituteInfo.subwayDistance}
                      Duration:  {instituteInfo.subwayDuration}

                      Mode:  Train
                      Distance:  {instituteInfo.trainDistance}
                      Duration:  {instituteInfo.trainDuration}

                      Mode:  Tram
                      Distance:  {instituteInfo.tramDistance}
                      Duration:  {instituteInfo.tramDuration}

                      Mode:  Rail
                      Distance:  {instituteInfo.railDistance}
                      Duration:  {instituteInfo.railDuration}
                        </label> */}
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




      </div>
    </>



  )
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyD0tGMAgpuMIlO51AcuBmxpOWtRGa76Fro",
})(GoogleMap)