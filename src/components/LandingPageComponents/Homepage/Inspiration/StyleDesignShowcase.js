import styled from 'styled-components';
import styles from 'styled-components';

const StyleDesignShowcase = styled.div`
margin-top: 4rem;
margin-bottom: 4rem;
h3{
  font-size: 3rem;
  font-weight: 500;
  line-height: 7.2rem;
  letter-spacing: 0em;
  color: #242424;
  text-transform: uppercase;
  text-align:center
}
.swiper-slide{
    background-position: center;
    background-size: 100%;
    
    /* width: 0rem; */
    /* height: 50rem; */

}
.swiper-slide img{
    display: block;
    width: 100%;
    height: 100%;
    //object-fit: cover;
}
.swiper-wrapper{
    height:300px
  }
  
.swiper-slide-next{
    // transform: translate3d(0px, 0px, -440px) rotateX(0deg) rotateY(-59deg) scale(1) !important;
}
.swiper-slide-prev{
    // transform: translate3d(0px, 0px, -440px) rotateX(0deg) rotateY(59deg) scale(1) !important;
}
.swiper-slide-active{
    /* width: 100% !important; */
    margin: 0 auto !important;
}
/* slide-inner {
 // position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  background-position: center;
 
} */


`

export default StyleDesignShowcase;
export const StyleDesignInner = styled.div`
margin-top: 10px;
`
export const StyleData = styled.div`

    text-align: center;
    border: 2px solid #8b8b8b;
    font-fmaily:Poppins;
    width: 50%;
    margin: auto;
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    
  h4{
    color: red;
    padding-top: 20px;
    font-size: 21px;
    font-family: Poppins;
    font-style: italic;

  }
  
   p{
    color: lightgray;
    font-size: 20px;
    font-fmaily:Poppins;
  }
  span{
    color: blue;
    font-size: 14px;
    font-weight:500;
    font-fmaily:Poppins;
  }
`