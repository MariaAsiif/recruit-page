import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import devfas from '../../../../../assets/landingImages/dev.png'
const MapLocation = (props) => {
  const [defualtLocation, setDefualtLocation] = useState({ defaultlat: 38.3628000, defaultlon: -4.6806000 })
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [drageAbleMarkerPosition, setdrageAbleMarkerPosition] = useState({ lat: '', lng: '' })
  const [activeMarker, setActiveMarker] = useState({})
  const [instituteInfo, setInstituteInfo] = useState({})


  const { locationData } = props

  console.log("locationData", locationData)

  let doctors = []
  let lawyers = []
  let associations = []
  let seed_Bank = []
  let Medical_Cannabis = []
  let Manufacturer = []
  let Law_Firms = []
  let Industrial_hemp = []
  let Cannabis_related_media = []
  let Distributor = []
  let Gardening = []
  let Growshop = []
  let n = 1
  locationData &&
    locationData.map((service) => {
      console.log("service", service)
      if (service.category == "Doctors") {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        doctors.push(obj)
        n++
      } else if (service.category == 'Lawyer And Medical Marijuana - Cannabis Specialist') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        lawyers.push(obj)
        n++
      } else if (service.category == 'Associations & Clubs') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        associations.push(obj)
        n++
      }
      else if (service.category == 'Seeds Bank') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        seed_Bank.push(obj)
        n++
      }
      else if (service.category == 'Medical Cannabis') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Medical_Cannabis.push(obj)
        n++
      }
      else if (service.category == 'Manufacturer') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Manufacturer.push(obj)
        n++
      }
      else if (service.category == 'Law Firms') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Law_Firms.push(obj)
        n++
      }
      else if (service.category == 'Industrial hemp') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Industrial_hemp.push(obj)
        n++
      }
      else if (service.category == 'Cannabis related media') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Cannabis_related_media.push(obj)
        n++
      }
      else if (service.category == 'Distributor') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Distributor.push(obj)
        n++
      }
      else if (service.category == 'Gardening') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Gardening.push(obj)
        n++
      }
      else if (service.category == 'Growshop') {
        let obj = {
          id: n,
          name: service.serviceName,
          position: {
            lat: service.serviceLocation.coordinates[1],
            lng: service.serviceLocation.coordinates[0],
          },
        };
        Growshop.push(obj)
        n++
      }
    })



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

  useEffect(() => {
    console.log('use effect in location picker map called')
    getCurrentPosition()
      .then((position) => {
        console.log("Position in map then")
        console.log(position)
        setDefualtLocation({
          defaultlat: position.coords.latitude,
          defaultlon: position.coords.longitude
        })
        setShowMap(true)
        let location = {
          type: "Point",
          coordinates: [position.coords.longitude, position.coords.latitude]

        }
        props.default(location)
        setDefualtLocation({
          defaultlat: position.coords.latitude,
          defaultlon: position.coords.longitude
        })
      })
      .catch((err) => {
        console.log(err)
      })

    return () => {
      console.log('component will unmount')
    }
  }, [])


  const handleMarkerClick = (props, marker, e) => {
    console.log("handleMarkerClick")
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
    <div className='map' style={{ position: 'relative' }}>

      <Map
        google={props.google}
        // className={classes.mapstyle}
        initialCenter={{
          lat: defualtLocation.defaultlat,
          lng: defualtLocation.defaultlon,
        }}
        zoom={props.zoom}
        
      >
        <Marker
          title="Location"
          name={"locationpicker"}
          position={{ lat: defualtLocation.defaultlat, lng: defualtLocation.defaultlon }}
          draggable={true}
          onDragend={(t, map, coord) => moveMarker(coord, map, t)}
          key={"locationpicker"}
          icon={"http://maps.google.com/mapfiles/ms/icons/green.png"}
          onClick={handleMarkerClick}
        ></Marker>
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/yellow.png"} title={'The marker`s title will appear as a tooltip.'} name={'SOMA'} position={{ lat: 37.778519, lng: -122.405640 }} />

        {doctors.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/ms/icons/yellow.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} position={props.position} />
          );
        })}

        {lawyers.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/ms/icons/red.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}

        {associations.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}

        {seed_Bank.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/ms/icons/purple.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Medical_Cannabis.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/ms/icons/pink.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Manufacturer.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon4.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Law_Firms.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon13.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Industrial_hemp.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon16.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Cannabis_related_media.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon16.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Distributor.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon56.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Gardening.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon60.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
        })}
        {Growshop.map((props, i) => {
          return (
            <Marker icon={"http://maps.google.com/mapfiles/kml/pal2/icon62.png"} key={i} onClick={handleMarkerClick} placeIndex={i} name={props.name} address={props.address} position={props.position} />
          );
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
})(MapLocation)