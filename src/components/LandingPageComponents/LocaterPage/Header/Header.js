import React, { useState, useEffect } from "react";
import { Row, Col, Card, Placeholder, Container } from "react-bootstrap";
import { StyleHeader } from "./StyleHeader";
// import { Form, Formik, ErrorMessage } from "formik";
// import Select from "./Select";
// import Search from "../../../../assets/landingImages/Search.svg";
// import Flag1 from "../../../../assets/landingImages/Flag1.svg";
// import Star1 from "../../../../assets/landingImages/Star1.svg";
// import Like from "../../../../assets/landingImages/Like.svg";
// import Card1img from "../../../../assets/landingImages/Card1img.svg";
// import Card2img from "../../../../assets/landingImages/Card2img.svg";
// import Card3img from "../../../../assets/landingImages/Card3img.svg";
// import Card4img from "../../../../assets/landingImages/Card4img.svg";
// import emptyUser from "../../../../assets/landingImages/emptyUser.png";
// import emptyLocation from "../../../../assets/landingImages/emptyLocation.png";
import GenerecService from "../../../../utils/GenericService";
import { API_URL } from "../../../../utils/config";
// import * as Yup from "yup";
import ReactPaginate from "react-paginate";
import Footer from "../../Homepage/Footer/Footer";
import Inputs from "../../Homepage/Locate/Inputs";
import { LocateMainContainer } from './StylesLocate'
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { MdArrowDropUp } from 'react-icons/md'
// import { PrimaryHeading } from '../../Globals/Globals'
// import ReactCountryFlag from 'react-country-flag';
// const validate = Yup.object({
//   country: Yup.string().required("Please select a country"),
// city: Yup.string().required("Please select a city"),
// service: Yup.string().required("Please Select a Service"),
// });
function Header() {
  const genericService = new GenerecService();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(12);
  const [countryList, setcountryList] = useState([]);
  const [cityList, setcityList] = useState([]);
  const [serviceList, setserviceList] = useState([]);
  const [doctorsData, setdoctorsData] = useState([]);
  const [cardsLoading, setcardsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [allLocations, setallLocations] = useState([])

  const [manus] = useState(['HOW', 'YOUR LOCATION', 'YOUR SEARCH', 'YOUR SAFETY', 'YOUR EXPERIENCE'])
  const [active, setActive] = useState('')


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    genericService
      .get(`${API_URL}getAddresses`)
      .then((res) => {
        setcountryList(res.finalData.country);
        setcityList(res.finalData.city);
        setserviceList(res.finalData.service);
        setcardsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);



  useEffect(() => {
    genericService
      .post(`${API_URL}usersData`, {
        city: "",
        country: "",
        service: "",
        // limit: 50,
      })
      .then((res) => {
        setdoctorsData(...doctorsData, res.data);
        setcardsLoading(false);
      })
      .catch((error) => {
        setcardsLoading(false);
        console.log("error", error);
      });
  }, []);


  const getlocations = (locations) => {
    setallLocations(locations)
  }

  useEffect(() => {
    const endOffset = itemOffset + 12;
    setCurrentItems(allLocations.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allLocations.length / 12));
  }, [itemOffset, allLocations]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 12) % allLocations.length;
    setItemOffset(newOffset);
  };


  const handleIndex = (index) => {
    if(index === active){
      setActive('')
    }
    else{
      setActive(index)
    }
  }





  return (
    <>

      <LocateMainContainer id={"LOCATE"}>
        <div className="bscontainer-fluid">
          <h2>LOCATE</h2>
          <h3>DOCTORS,DISPENSARIES,GRWO SHOPS,MMJ ASSOCIATIONS,CLUBS CAFES, AND LAWYERS</h3>
          <div className="list_data">
            <ul >
              {manus.map((manu, index) => (
                <li onClick={() => handleIndex(index)}>
                  {manu}
                  {active === index ?
                    <IoMdArrowDropup className="icons" />
                    :
                    <IoMdArrowDropdown className="icons" />
                  }
                </li>

              ))}
            </ul>

          </div>
          {active === 0 ?
            <p className="text-[16px]">
              Welcome, the above-listed professionals and services can be found using our mapping locator function. The service is provided to all clients and visitors at no charge. However, we request your feedback and use of the service to assess the quality of the assistance you encountered from any of those using the locator. That information will be shared with your peers seeking a similar experience if satisfactory or avoid any establishment that doesn't afford them excellent treatment or a high-quality product, goods, or service. The search function is powered by Google Maps technologies, it will direct you to any of the stated services available nearest your hotel, if traveling, or your current in-country location.
            </p>
            :
            active === 1 ?
              <p className="text-[16px]">
               location Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
              </p>
              : active === 2 ?
                <p className="text-[16px]">
                  Search Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
                </p>
                : active === 3 ?
                  <p className="text-[16px]">
                    Sefety Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
                  </p>
                  : active === 4 ?
                    <p className="text-[16px]">
                      Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
                    </p>
                    : null
          }

        </div>
        <Inputs />
      </LocateMainContainer>

      {/* <StyleHeader>

        <div className="container">
          {allLocations.length == 0 && cardsLoading ? (
            <>
              <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="wave" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="wave" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
            </>
          ) : (
            <div className="loacateUsCard-container">
              {!cardsLoading && allLocations.length == 0 ? (
                <h1>No Data Found</h1>
              ) : (
                <>
                  <Row>
                    {currentItems.map((v, i) => (
                      <Col key={i} lg={3} md={6} sm={6}>
                        <Card className="cards">
                          <div className="locator-person-image-container" >
                            <img
                              src={v.ImageURL ? v.ImageURL : emptyLocation}
                              className="img-section"
                              alt="img"
                            />{" "}
                          </div>
                          <div className="card-data">
                            <h6>{v.Title}</h6>
                            <p className="para">{v._address}</p>
                            <div className="d-flex pt-1 text1">
                              <div>
                                <img src={Flag1} className="icon " alt="icon" />
                                <span className="country-name-text">
                                  {v.serviceName}
                                </span>
                              </div>
                              <div>
                                <img src={Star1} className="icon " alt="icon" />
                                <span className="icon-text">0.0</span>
                              </div>
                              <div>
                                <img src={Like} className="icon " alt="icon" />
                                <span className="icon-text">Likes 0</span>
                              </div>
                            </div>
                            <div>
                              <Link to={`/detail/${v._id}`} >
                                <input
                                  type="submit"
                                  className="locator-card-bt"
                                  name="See Details"
                                  value="See Details"
                                />
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                    className='locator-pagination'
                  />
                </>
              )}
            </div>
          )}
        </div>
        <Footer />
      </StyleHeader> */}
    </>
  );
}

export default Header;
