import React, { useState, useEffect } from "react";
import { StyleTrending, TrendNowInner } from "./StyleTrendingNow";
import Slider from "react-slick";
import { BASE_URL, GET_PRODUCTS } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";
import CustomCard from "../../Globals/CustomCard";
import ViewMore from "../ViewMore/ViewMore";
import { Placeholder } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
import { Country, State, City } from 'country-state-city';

function TrendingNow({ heading, section }) {
  const [viewMor, setviewMor] = useState(false);
  const [all_Countries, setall_Countries] = useState([])
  const [all_States, setall_States] = useState([])
  const [all_Cities, setall_Cities] = useState([])
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  })


  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };







  const handleChangeCountry = (e) => {
    let { value } = e.target
    const updatedStates = State.getStatesOfCountry(value)
    setall_States(updatedStates)
    setLocation((prevmodel) => ({
      ...prevmodel,
      country: value,

    }))



  }


  const handleState = (e) => {
    let { value } = e.target
    const updatedCities = City.getCitiesOfState(location.country, value)
    setLocation((prevmodel) => ({
      ...prevmodel,
      state: value,

    }))
    setall_Cities(updatedCities)

  }


  const handleChange = (e) => {
    let { name, value } = e.target
    setLocation((prevmodel) => ({
      ...prevmodel,
      [name]: value
    }))
  }


  useEffect(() => {
    try {
      (async () => {
        const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
        const currentCountryCode = response.data.location.country.code
        const get_countris = Country.getAllCountries()
        const updatedStates = State.getStatesOfCountry(currentCountryCode)
        setall_States(updatedStates)
        setLocation((prevmodel) => ({
          ...prevmodel,
          country: currentCountryCode,

        }))
        setall_Countries(get_countris)


      })();
    } catch (error) {
      console.log(error);
    }

  }, [])



  const {
    data: productData,
    isSuccess: stateIsSuccess,
    isLoading: stateIsLoading,
    isFetching: stateIsFetching,
    error: stateError,
    isError: stateIsError,
  } = useQuery(
    "products",
    () => {
      return axios.get(BASE_URL + GET_PRODUCTS);
    },
    {
      refetchInterval: false,
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      select: (data) =>
        data.data.data.filter((item) => item.productType === section),
      enabled: true,
    }
  );

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const style = {
    borderBottom: "1px solid #DADADA",
    paddingBottom: "1rem",
  };

  return (
    <StyleTrending>
      <TrendNowInner>
        <div className="container">
          <h1 style={style} className="main-heading">
            {heading}
          </h1>
          {stateIsLoading && (
            <div>
              <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>

            </div>
          )}

          <div className="row">
            {/* <Slider {...settings} className="trendingNow-slick"> */}
            <div className="col-md-3 left_catagory">
              <div className="catagoey_list">
                <div className="category">
                  <h3>Catagories</h3>
                  <ul>
                    <li className="list_data">
                      <input type="checkbox" />
                      <span>Catagory Name</span>
                    </li>
                    <li className="list_data">
                      <input type="checkbox" />
                      <span>Catagory Name</span>
                    </li>
                    <li className="list_data">
                      <input type="checkbox" />
                      <span>Catagory Name</span>
                    </li>
                    <li className="list_data">
                      <input type="checkbox" />
                      <span>Catagory Name</span>
                    </li>
                    <li className="list_data">
                      <input type="checkbox" />
                      <span>Catagory Name</span>
                    </li>
                    <li className="list_data">
                      <input type="checkbox" />
                      <span>Catagory Name</span>
                    </li>
                  </ul>
                </div>

                <div className="location">
                  <h2>locations</h2>
                  <select value={location.country} onChange={handleChangeCountry} name="country" id="country" className={`form-control  form-control-lg `} >
                    <option value="">Select Country </option>
                    {all_Countries.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                  </select>

                  <select value={location.state} onChange={handleState} name="state" id="state" className={`form-control  form-control-lg mt-4  `}   >
                    <option value="">Select State </option>
                    {all_States.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                  </select>

                  <h3>Cities</h3>
                  <ul>
                    {all_Cities.map((city) => (
                      <li className="list_data">
                        <span>{city.name} </span>
                      </li>

                    ))}
                  </ul>

                </div>

                <div>
                  <h3 className="mb-5 mt-5">Price Range </h3>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    step={5}
                    ruler={true}
                    label={true}
                    preventWheel={false}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                      handleInput(e);
                    }}
                  />

                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {!stateIsLoading &&
                  productData.splice(2).map((item, index) => (
                    <div key={index} className="col-md-4 mb-4"  >
                      <CustomCard desc={item.description} img={item.productImage} title={item.title} price={item.price} />
                    </div>
                  ))}
              </div>

              <div className="text-center">

                {!viewMor && <button className="more_btn " onClick={() => setviewMor(!viewMor)}>View more </button>}
              </div>


              {viewMor &&
                <ViewMore data={productData} />
              }
            </div>

          </div>
          <div className="row">


            {/* <Slider {...settings} className="trendingNow-slick">
            {!stateIsLoading &&
              productData.map((item, index) => (
                <div key={index} className="d-inline-block">
                  <h5 className="outside-card-text">{item.title}</h5>
                  <CustomCard
                    img={item.productImage}
                    title={item.title}
                    price={item.price}
                  />
                </div>
              ))}
          </Slider> */}
          </div>
        </div>
      </TrendNowInner>
    </StyleTrending>
  );
}
export default TrendingNow;
