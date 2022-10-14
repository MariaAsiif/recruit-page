import React, { useState } from 'react'
import AgenciesHeader from '../AgenciesPage/AgenciesHeader/AgenciesHeader';
import FeatureMarketContainer from '../Homepage/FeatureMarketplace/FeatureMarketContainer';
import Footer from '../Homepage/Footer/Footer';
import HomePageNav from "../Homepage2/HomePageNav";
import { ImCross } from "react-icons/im";
import { FiChevronLeft } from "react-icons/fi";

import styles from "./Checkout.module.css"
import paypal from "../../assets/paypal.png"
import FollowUs from '../Homepage/FollowUs/FollowUs';


import followUs1 from "../../assets/twitter.svg";
import followUs2 from "../../assets/facebook.svg";
import followUs3 from "../../assets/youtube.svg";
import followUs4 from "../../assets/snapchat.svg";
import followUs5 from "../../assets/www.svg";
import followUs6 from "../../assets/messenger.svg";
import followUs7 from "../../assets/instagram.svg";
import followUs8 from "../../assets/linkdin.svg";
import hygie1 from "../../assets/hygie1.svg";
import hygie2 from "../../assets/hygie2.svg";
import hygie3 from "../../assets/hygie3.svg";
import hygie4 from "../../assets/hygie4.svg";
import hygie5 from "../../assets/hygie5.svg";
import hygie6 from "../../assets/hygie6.svg";
import hygie7 from "../../assets/hygie7.svg";
import hygie8 from "../../assets/hygie8.svg";
import hygie9 from "../../assets/hygie9.svg";
import SSL from '../Homepage/SSL/SSL';
import TrustedSuppliers from '../Homepage/TrustedSuppliers/TrustedSuppliers';

import aboveCopyright1 from "../../assets/aboveCopyright1.svg";
import aboveCopyright2 from "../../assets/aboveCopyright2.svg";
import aboveCopyright3 from "../../assets/aboveCopyright3.svg";
import aboveCopyright4 from "../../assets/aboveCopyright4.svg";
import aboveCopyright5 from "../../assets/aboveCopyright5.svg";
import aboveCopyright6 from "../../assets/aboveCopyright6.svg";
import aboveCopyright7 from "../../assets/aboveCopyright7.svg";
import aboveCopyright8 from "../../assets/aboveCopyright8.svg";

const Checkout = () => {
    const [products, setProducts] = useState([
        { name: "Blue handbag", price: 85.65, pic: "https://hporx-backend.herokuapp.com/uploads//2022-05-31T13-47-35.714Z-women-1.png" },
        { name: "Light peach handbag", price: 85.65, pic: "https://hporx-backend.herokuapp.com/uploads//2022-05-31T13-47-46.562Z-women-2.png" },

    ]);
    const followUsImgs = [
        { img: followUs1, title: "Twitter" },
        { img: followUs2, title: "Facbook" },
        { img: followUs3, title: "Youtube" },
        { img: followUs4, title: "TencentQQ" },
        { img: followUs5, title: "Vkontakte" },
        { img: followUs6, title: "Messenger" },
        { img: followUs7, title: "Instagram" },
        { img: followUs8, title: "LinkedIn" },
    ];
    const hygieImgs = [
        { img: hygie1, title: "Europe" },
        { img: hygie2, title: "USA" },
        { img: hygie3, title: "Canada" },
        { img: hygie4, title: "Qatar" },
        { img: hygie5, title: "Dubai" },
        { img: hygie6, title: "Spain" },
        { img: hygie7, title: "Qatar" },
        { img: hygie8, title: "Spain" },
        { img: hygie9, title: "Dubai" },
    ];
    const styleshr = {
        margin: "1rem 2rem",
        border: "none",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        padding: " 0 2rem",
    };
    const aboveCopyrightImgs = [
        aboveCopyright1,
        aboveCopyright2,
        aboveCopyright3,
        aboveCopyright6,
        aboveCopyright4,
        aboveCopyright5,
        aboveCopyright7,
        aboveCopyright8,
    ];

    return (
        <>
            <AgenciesHeader />
            <HomePageNav />
            <FeatureMarketContainer order="first" />
            <div className={`container pb-5 ${styles.wrapper}`}>
                <div className='row px-5  '>
                    <div className={`col-12 ${styles.checkouttext}`}>
                        <div>Checkout</div>
                    </div>
                    <div className='col-md-8  '>
                        <div className={styles.cartWrapper}>
                            <h1 className={styles.cartheading}>Shopping Cart</h1>
                            {products.map((product) => {
                                return (
                                    <div className={`row mb-2 border-bottom py-4 px-4 ${styles.productWrapper}`}>
                                        <div className='col-md-1'>
                                            <img className={styles.productimg} src={product.pic} alt="productimg" />
                                        </div>
                                        <div className='col-md-8 d-flex align-items-center'>
                                            <div className={styles.productname} >
                                                {product.name}
                                            </div>
                                        </div>
                                        <div className='col-md-1 d-flex align-items-center justify-content-center'>
                                            <div>
                                                <ImCross role="button" className='text-danger ' />
                                            </div>
                                        </div>
                                        <div className='col-md-2 d-flex align-items-center justify-content-end'>
                                            <div className={styles.productprice}>
                                                ${product.price}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={`row mb-2 border-bottom py-4 px-4 ${styles.productWrapper}`}>
                                <div className='col-md-8'></div>
                                <div className='col-md-2 d-flex align-items-center  '>
                                    <div className={styles.productsubtotal}>
                                        Subtotal:
                                    </div>
                                </div>
                                <div className='col-md-2 d-flex align-items-center justify-content-end'>
                                    <div className={styles.productprice}>
                                        $896.35
                                    </div>
                                </div>
                            </div>

                            <div className={`row mb-2 border-bottom py-4 px-4 ${styles.productWrapper}`}>
                                <div className='col-md-8 d-flex align-items-center'>
                                    <div >
                                        <a href="/madeIn" className={styles.continuShopping}><FiChevronLeft size={21} />Continue Shopping</a>
                                    </div>
                                </div>
                                <div className='col-md-2 d-flex align-items-center  '>
                                    <div className={styles.producttotaltext}>
                                        Total:
                                    </div>
                                </div>
                                <div className='col-md-2 d-flex align-items-center justify-content-end'>
                                    <div className={styles.producttotal}>
                                        $896.35
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row gy-5'>
                            <div className='col-12 '>
                                <div className={styles.infoWrapper}>
                                    <h1 className={styles.cartheading}>Your Information</h1>
                                    <div className={styles.inputfieldWrapper}>
                                        <label>Email</label>
                                        <input type="email" placeholder="john@gmail.com" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className={styles.paymentWrapper}>
                                    <h1 className={styles.cartheading}>Payment Options</h1>
                                    <div className={`text-center ${styles.paymentinnerWrapper}`}>
                                        <img src={paypal} className={styles.paymentpic} />
                                        <button className={styles.paymentbutton}>Buy now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FollowUs
                imgs={followUsImgs}
                head="Follow Us"
                imgs1={hygieImgs}
                head1="Hygieia Apothecary"
            />
            <Footer />
            <SSL />
            <hr style={styleshr} />
            <TrustedSuppliers imgs={aboveCopyrightImgs} head="" />
        </>
    )
}

export default Checkout