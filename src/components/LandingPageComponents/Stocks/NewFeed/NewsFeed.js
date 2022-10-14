import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Placeholder } from 'react-bootstrap'
import { NewsContainer, Pagination } from './StyleNewsFeed'
import ReactPaginate from "react-paginate";
import moment from 'moment'
const NewsFeed = () => {

    const [news, setNews] = useState([])
    const [cardsLoading, setcardsLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    const itemPerPage = 4


    function add3Dots(string, limit) {
        var dots = "...";
        if (string && string.length > limit) {
            // you can also use substr instead of substring
            string = string.substring(0, limit) + dots;
        }

        return string;
    }





    useEffect(() => {
        const newApi = async () => {
            try {
                const res = await axios.get("https://cannabisapi.co/api/news?api_key=1ec3e6b5ac623e62be049dd5c20e8307dc7620e9j")
                setNews(res.data.data)
                console.log("Rs" , res)
            }
            catch (err) {

            }
        }
        newApi()
    }, [])


    useEffect(() => {
        const endOffset = itemOffset + itemPerPage
        setCurrentItems(news.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(news.length / itemPerPage));
    }, [itemOffset, news]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 4) % news.length;
        setItemOffset(newOffset);
    };


    // useEffect(() => {
    //     const endOffset = itemOffset + 3;
    //     setCurrentItems(news.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(news.length / 3));
    // }, [itemOffset, news]);


    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * 3) % news.length;
    //     setItemOffset(newOffset);
    // };



    return (
        <Container >
            <h2 >Cannabis Stocks Latest News</h2>
            <NewsContainer>
                {news.length == 0 && cardsLoading ? (
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
                    <div className="card_wrapper p-2">
                        {!cardsLoading && news.length == 0 ? (
                            <h1>No Data Found</h1>
                        ) : (
                            <>
                                {currentItems.map((item, i) => (
                                    <div className='card_container mt-4'key={i} >
                                        <div className='card_item'>
                                            <a href={item.url}  target="_blank" rel="noopener noreferrer">
                                                <img className='news_image' src={item.image} loading="lazy" alt="Altria Stock (NYSE:MO): The All-Weather Dividend King Strikes Again" /></a>
                                        </div>
                                        <div className="content_info">
                                            <a href={item.url}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <span className="news_info">{add3Dots(item.headline, 80)}</span>
                                                <div className="data_text">{add3Dots(item.excerpt, 150)}</div>
                                            </a>
                                            <hr />
                                            <div>
                                                <span className="date">{ moment(item.published).format('ll') }</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </>


                        )
                        }


                    </div>
                )}


            </NewsContainer>

            <Pagination>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                    className='locator-pagination'
                />
            </Pagination>

        </Container>
    )
}

export default NewsFeed