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
  text-align:center;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    
  }

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
    border: 1px solid lightgray;
    font-fmaily:Poppins;
    width: 65%;
    margin: auto;
    padding:0px 0px 10px 0px;
    background-color: white;
    
  h4{
    color: black;
     padding: 0px 20px;
    font-size: 13px;
    font-family: Poppins;
    

  }
  
   p{
    color: black;
    padding-top:5px;
    font-size: 20px;
    font-fmaily:Poppins;
  }
  small{
    color: lightgray;
  }
  span{
    color: black;
    font-size: 8px;
    font-weight:500;
    font-fmaily:Poppins;
  }
`