import React, { useState, useEffect } from "react";
import { Row, Col, Card, Placeholder, Container } from "react-bootstrap";

import ReactPaginate from "react-paginate";
import CustomCard from "../../Globals/CustomCard";
import { StyleHeader , StyleTrending } from './StyleViewmore'
function ViewMore({ data }) {

    console.log("Data", data)

    // const [currentItems, setCurrentItems] = useState(null);
    // const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState(0);

    // useEffect(() => {
    //     const endOffset = itemOffset + 12;
    //     setCurrentItems(data.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(data.length / 12));
    // }, [itemOffset, data]);

    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * 12) % data.length;
    //     setItemOffset(newOffset);
    // };
    console.log("Data", data)

    return (
        <>


            <StyleHeader>


                <div className="container">

                    <div className="">

                        <>
                            <Row>
                                {data && data.map((item, i) => (
                                    <Col key={i} lg={4} md={6} sm={6}>
                                        <CustomCard
                                            desc={item.description}
                                            img={item.productImage}
                                            title={item.title}
                                            price={item.price} />
                                    </Col>
                                ))}
                            </Row>
                            <div style={{marginTop:'50px' , marginLeft:'-20rem'}} >
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="Next"
                                    // onPageChange={handlePageClick}
                                    pageRangeDisplayed={2}
                                    // pageCount={pageCount}
                                    previousLabel="Previous"
                                    renderOnZeroPageCount={null}
                                    className='locator-pagination'
                                />
                            </div>
                        </>
                    </div>
                </div>
            </StyleHeader>
        </>
    );
}

export default ViewMore;
