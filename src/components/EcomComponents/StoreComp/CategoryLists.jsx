import React, { useEffect } from 'react'

import { callPublicApi } from '../../../utils/CallApi';
import { useState } from 'react';
import ImageGalleryPopup from './ImagesGallery';


const CategoryLists = () => {
    const [category, setCategory] = useState([])
    let categoryList = ["Clothing", "Animals", "Personal Electronics & Electric Mobility", "Beverages"]

    useEffect(() => {
        let fetchLists = async () => {
            let option = {

                "sortproperty": "createdAt",
                "sortorder": -1,
                "offset": 0,
                "limit": 100,
                "query": {
                    "critarion": { "active": true },

                    "addedby": "_id email first_name",

                    "lastModifiedBy": "_id email first_name"
                }
            }
            try {

                let res = await callPublicApi('/productsOfStore/getProductsWithFullDetailsPublic', 'post', option)
                if (res.status === "Success") {
                    setCategory(res?.data?.productsOfProductsOfStores)
                    // let arr  
                    // let pr = category.filter((f , i) => {
                    //     if()
                    // } )
                }
            }
            catch (err) {
                console.log("err", err)
            }
        }
        fetchLists()
    }, [])

    console.log("category", category)

    return (
        <>
            {categoryList.map((cat, i) => (

                <ImageGalleryPopup title={cat} images={category} key={i} />
            ))
            }

        </>
    )
}

export default CategoryLists