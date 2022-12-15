import React, { useEffect, useState } from 'react'
// import { IoEyeOutline } from 'react-icons/io5';
import AgenciesHeader from '../../components/EcomComponents/AgenciesHeader/AgenciesHeader';
// import HomeNav from '../../components/EcomComponents/HomeNav/HomeNav';
import TopHeader from '../../components/EcomComponents/TopHeader/TopHeader';
import WhishLists from '../../components/EcomComponents/WishlistComp/List';
import Footer from '../../components/Footer/Footer';
import { callPublicApi } from '../../utils/CallApi';
import banner from '../../assets/ecome/banner.png'
import StoreHeader from '../../components/EcomComponents/StoreComp/StoreHeader';


const Wishlist = () => {
    const [allInspires, setallInspires] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const payload = {
                    sortproperty: "created_at",
                    sortorder: -1,
                    offset: 0,
                    limit: 5,
                    query: {
                        critarion: { active: true, },
                        addedby: "_id email first_name",
                        lastModifiedBy: "_id email first_name"
                    }
                }
                const response = await callPublicApi("/productsOfStore/getProductsWithFullDetailsPublic", "post", payload)

                setallInspires(response.data.productsOfProductsOfStores)
            } catch (error) {
                console.log(error);
            }
        })();


    }, [])

    return (
        <>

            <TopHeader />
            <StoreHeader />
            <div className="relative">
                <img src={banner} alt="banner" className="lg:h-full h-[120px] object-cover" />
                <div className="bscontainer">
                    <h2 className="absolute top-[30%] text-white font-semibold lg:text-[40px] text-[25px]">Whishlist</h2>
                </div>
            </div>
            <WhishLists allInspires={allInspires} />


            <Footer />

        </>
    )
}

export default Wishlist